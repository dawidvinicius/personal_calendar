module.exports.consultaUsuarios = function(app, req, res){
	var connection = app.config.dbConnection;
	var usuariosModel = new app.app.models.UsuariosDAO(connection);

	usuariosModel.listaUsuarios(req, res);
}