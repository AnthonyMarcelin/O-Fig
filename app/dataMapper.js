import client from './database.js';

const dataMapper = {

    getAllFigurines: async () => {

        const sql = 'SELECT * FROM figurine';

        const result = await client.query(sql);
        return result.rows;

    },

    getOneFigurine: async (id) => {

        const sql = {
            text : `SELECT * FROM figurine WHERE id = $1`,
            values : [id],           
        };

        // ou  const sql = `SELECT * FROM figurine WHERE id=${id}`;

        const result = await client.query(sql);
        return result.rows[0];

    },

    getArticleRewiew: async (id) => {

        const sql = { 
            
            text : `SELECT * FROM review WHERE figurine_id=$1`,
            values: [id],
        };

        const result = await client.query(sql);
        return result.rows;
        
    },

};

export default dataMapper;