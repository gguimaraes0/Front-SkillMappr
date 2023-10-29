const neo4j = require('neo4j-driver');

const uri = 'neo4j+s://3d32b423.databases.neo4j.io'; // Substitua pelo URL do seu servidor Neo4j
const user = 'neo4j'; // Substitua pelo seu nome de usuário
const password = 'OWJn1NapdsRNvjT79PM56XYA6FLKqRnRJyO-jD6BCSo'; // Substitua pela sua senha

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));


const session = driver.session();

session
  .run('MATCH (n) RETURN n LIMIT 5')
  .then(result => {
    result.records.forEach(record => {
      console.log(record.get(0).properties);
    })
  })
  .catch(error => {
    console.error('Erro ao executar a consulta:', error);
  })
  .finally(() => {
    session.close();
    driver.close();
  });
