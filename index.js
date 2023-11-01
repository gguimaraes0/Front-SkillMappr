// const neo4j = require('neo4j-driver');

// const uri = 'neo4j+s://3d32b423.databases.neo4j.io'; // Substitua pelo URL do seu servidor Neo4j
// const user = 'neo4j'; // Substitua pelo seu nome de usuário
// const password = 'OWJn1NapdsRNvjT79PM56XYA6FLKqRnRJyO-jD6BCSo'; // Substitua pela sua senha

// const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));


// const session = driver.session();

// session
//   .run('MATCH (n) RETURN n LIMIT 5')
//   .then(result => {
//     result.records.forEach(record => {
//       console.log(record.get(0).properties);
//     })
//   })
//   .catch(error => {
//     console.error('Erro ao executar a consulta:', error);
//   })
//   .finally(() => {
//     session.close();
//     driver.close();
//   });

let neoViz;

function draw() {
  const config = {
    containerId: "viz",
    neo4j: {
      serverUrl: "neo4j://3d32b423.databases.neo4j.io",
      serverUser: "neo4j",
      serverPassword: "OWJn1NapdsRNvjT79PM56XYA6FLKqRnRJyO-jD6BCSo",
      driverConfig: {
        encrypted: "ENCRYPTION_ON",
        trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES"
      }
    },
    // labels: {
    //   "SBC_CompetenciaDerivada": {
    //     caption: "descricao",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    //   "SBC_CompetenciaEspecificaEgresso": {
    //     caption: "descricao",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    //   "SBC_CompetenciaGeralEgresso": {
    //     caption: "descricao",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    //   "SBC_CompetenciaGeralEgresso": {
    //     caption: "descricao",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    //   "SBC_Conteudo": {
    //     caption: "nome",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    //   "SBC_Eixo": {
    //     caption: "eixo",
    //     // size: "pagerank",
    //     community: "community"
    //   },
    // },
    // relationships: {
    //   INTERACTS: {
    //     value: "weight"
    //   }
    // },
    initialCypher: "MATCH (n)-[r]-(m) RETURN n, r, m"

    //MATCH (a:SBC_CompetenciaGeralEgresso) RETURN a as Node, "CompetenciaGeralEgresso" as Type UNION MATCH (b:SBC_Conteudo) RETURN b as Node, "Conteudo" as Type UNION MATCH (c:SBC_Eixo) RETURN c as Node, "Eixo" as Type UNION MATCH (d:SBC_CompetenciaEspecificaEgresso) RETURN d as Node, "CompetenciaEspecificaEgresso" as Type UNION MATCH (e:SBC_CompetenciaDerivada) RETURN e as Node, "CompetenciaDerivada" as Type;

  };

  neoViz = new NeoVis.default(config);
  neoViz.render();
}