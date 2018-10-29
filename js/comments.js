!function(){
    let view = View('section.comments');

    let model = Model({resourceName:'Comments'})

    let controller = Controller({
        messagesList:null,
        form: null,
        init: function(){
            this.form = document.querySelector('form'),
            this.messagesList = document.querySelector('#messagesList')
            this.loadMessages()
        },
        loadMessages: function(){
            this.model.fetch().then(
                function(messages){
                    let array = messages.map((item) => {return item.attributes});
                    array.forEach(item => {
                        let li = document.createElement('li');
                        li.innerText = `${item.name}：${item.content}`;
                        messagesList.append(li);
                    });
                }
            )
        },
        bindEvents: function(){
            this.form.addEventListener('submit',(e) => {
                e.preventDefault();
                let content = document.querySelector('textarea').value;
                let name = document.querySelector('input[name=name]').value;
                if(name && content){
                    this.saveMessages();
                }
            })
        },
        saveMessages: function(){
            let content = document.querySelector('textarea').value;
            let name = document.querySelector('input[name=name]').value;
            this.model.save({name,content}).then(() => {
                let li = document.createElement('li');
                li.innerText = `${name}：${content}`;   
                messagesList.append(li);
                document.querySelector('textarea').value = null;
            })
        }
    })

    controller.init.call(controller,view,model)

}.call()