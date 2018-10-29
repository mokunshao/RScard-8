// 效果
// let model = Model({resourceName:'表名'})

window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            let APP_ID = '9wfv4Ag972nBdC0W9kY8kzgA-gzGzoHsz';
            let APP_KEY = 'maQWEU7VfKW2rwnnoTYngsBi';            
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function(){
            let query = new AV.Query(resourceName);
            return query.find();
        },
        save: function(object){
            let Comments = AV.Object.extend(resourceName);
            let comments = new Comments();
            return comments.save(object)
        }
    }
}