Meteor.publish('all-posts',()=>{
    return Posts.find({})
})

Meteor.publish('lazyload-posts',(limit)=>{
    // console.log(limit," Limit is here ")
    return Posts.find({},{
        limit:limit,
        fields:{
            title:1,
            description:1,
            timeCreated:1,
        }
    })
})
Meteor.publish('single-post',(slug)=>{
    return Posts.find({slug:slug})
})