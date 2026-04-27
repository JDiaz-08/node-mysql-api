const mysql = require('mysql2/promise');

async function test() {
    console.log('Attempting connection...');
    try {
        const conn = await mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: ''
        });
        console.log('SUCCESS - Connected to MySQL!');
        await conn.end();
    } catch (err) {
        console.log('FAILED:', err.message);
        console.log('Error code:', err.code);
    }
}

test();