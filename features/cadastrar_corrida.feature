#language: pt

Funcionalidade: Cadastrar corrida na aplicação
    Eu como interessado no app Me Leva Ai
    Gostaria de realizar um cadastro de corrida
    Para que eu possar utilizar o serviço do app

Cenário: Usuário informa os dados da corrida para cadastro.
    
    Dado que o usuário tenha informado os seguintes dados da corrida a ser cadastrada:
        | user        | {"name": "Gabriela", "telephone": "41 999999999", "email": "gabi@letscode.com", "password": "12345"} |
        | vehicle     | {"model": "Honda Civic"}                                                                             |  
        | startPlace  | Curitiba                                                                                             |
        | finishPlace | São Paulo                                                                                            |
    Quando o usuário enviar os dados para o sistema por meio do método POST.
    Então o sistema deve criar a corrida com os dados informados e retornar um JSON com o status code 201.