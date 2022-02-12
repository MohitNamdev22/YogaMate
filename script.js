
//by Aradhya Tiwari
let img = document.getElementById("img");
let name = document.getElementById("name");
let obj = JSON.parse(JSON.stringify(data))
class yog{
    constructor(pose){
        this.pose = pose
        let current = this.pose
        this.current = current
    }
    main(){
        if(this.pose == 10) return
        console.log(obj.result[this.pose].id);
        this.pose++
        img.src=obj.result[this.pose].img_url
        name.innerHTML = obj.result[this.pose].sanskrit_name
        setTimeout(()=>{this.main()}, 2000);
    }
    next(){
        this.pose+=1
    }
    prev(){
        this.pose-=1
    }
    reset(){
        this.pose = this.current
        this.main()
    }
}

let gar = new yog(0);
gar.main();


