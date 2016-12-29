angular
      .module('pessoas', ['ngRoute'])
      .config(function($routeProvider) {
        $routeProvider
              .when('/',
                    {templateUrl: 'listar.html'}
              )
              .when('/add',
              {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
              });
      })
      .controller('CtrlPessoas', function($scope){
        $scope.pessoas = [
          {nome: 'Jonathas A. B. de Lima', cidade: 'Caruaru'},
          {nome: 'Jefferson L. B. de Lima', cidade: 'Maceió'},
          {nome: 'Josilene P. B. de Lima', cidade: 'Maceió'},
          {nome: 'Jessé R. B. de Lima', cidade: 'Maceió'},
          {nome: 'Adilene B. V. de Lima', cidade: 'Maceió'},
          {nome: 'José M. A. de Lima', cidade: 'Céu'}
        ];
      }).controller('CtrlAdicionar', function($scope){
        $scope.add = function(){
          $scope.pessoas.push({
            nome: $scope.pessoa.nome,
            cidade: $scope.pessoa.cidade
          });
        };
      });
