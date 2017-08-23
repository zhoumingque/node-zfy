exports.setRoutes = app => {
  const index = require('./controllers/index')
       , zfy = require('./controllers/zfy');
  app.get('/',index.index);
  app.post('/medical',zfy.medical);
  app.get('/medicals',zfy.medicals);
}