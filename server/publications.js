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

Meteor.publish('userRoles',function(){
    // console.log(this.userId," aya hai yahan pay ")
    if (this.userId){
        return Meteor.users.find({_id:this.userId},{
            fields:{roles:1}
        })
    }else{
        this.ready()
    }
})