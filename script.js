//by Aradhya Tiwari
let img = document.getElementById("img");
let namee = document.getElementById("name");
let obj = JSON.parse(JSON.stringify(data))
let timing = document.getElementById("timing");
let desc = document.getElementById("ytd");
class yog{
    constructor(pose){
        this.pose = pose
    }
    update(a){
        this.pose+=a;
        img.src=obj.result[this.pose].img_url;
        namee.innerHTML = obj.result[this.pose].sanskrit_name;
        desc.href = obj.result[this.pose].youtube_link;
    }
    next(){
        this.update(-1);
    }
    prev(){
        this.update(1);
    }
    reset(){
        this.pose = this.current
        this.timer()
    }
}

let gar = new yog(48);
gar.update(-1);