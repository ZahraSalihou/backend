// importez le package HTTP natif de Node
// Node utilise le système de module CommonJS, donc pour importer le contenu d'un module JavaScript, on utilise le mot-clé require plutôt que le mot-clé import
const http = require('http');

// utilisez pour créer un serveur, en passant une fonction qui sera exécutée à chaque appel effectué vers ce serveur
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur Zahra !');
});
 //configurez le serveur pour qu'il écoute 
server.listen(process.env.PORT || 3000);