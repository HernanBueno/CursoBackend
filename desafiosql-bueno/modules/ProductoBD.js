const knex = require("knex");
class productoBD {

    conexionDB;

    constructor(datosConexion, table) {
        this.datosConexion = datosConexion;
        this.tabla = table;
    }

    async crearTabla() {
        try {
            this.conexionDB = knex(this.datosConexion);
            let conex = this.conexionDB;
            let producto = this.tabla

            await conex.schema.hasTable(productos).then(async function(exists) {
                if (!exists) {
                    await conex.schema.createTable(productos, (table) => {
                        table.increments("id").primary().notNullable();
                        table.integer("code");
                        table.string("title");
                        table.string("description");
                        table.integer("price");
                        table.string("thumbnail");
                        table.integer("stock");
                    });

                } else {

                }
            });
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    }

    async getProductos() {
        try {
            this.conexionDB = knex(this.datosConexion);
            let res = await this.conexionDB(this.productos)
            return res;
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    };

    async getProductoById(idP) {
        try {
            this.conexionDB = knex(this.datosConexion);
            let res = await this.conexionDB(this.productos).where("id", idP);
            return res;
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    }

    async setProducto(objP) {
        try {
            this.conexionDB = knex(this.datosConexion);
            let res = await this.conexionDB(this.productos).insert(objP);
            return res;
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    }

    async updateProducto(idP, objP) {
        try {
            this.conexionDB = knex(this.datosConexion);
            return await this.conexionDB(this.productos).where("id", idP).update(objP);
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    }

    async deleteProducto(idP) {
        try {
            this.conexionDB = knex(this.datosConexion);
            return await this.conexionDB(this.productos).where("id", idP).del();
        } catch (error) {
            console.error(`${error}`);
        } finally {
            this.conexionDB.destroy();
        }
    }
}

module.exports = productoBD;