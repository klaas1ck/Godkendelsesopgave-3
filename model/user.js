class image {
    constructor(filename, size, resolution, type){
    this.filename = filename
    this.size = size
    this.resolution = resolution
    this.type = type
    }
}
let image1 = new image("KiaFerie", "50mb", "1024x786", "jpeg")

class normalUser {
    constructor(fname, lname, age, username, password, interest){
    this.fname = fname
    this.lname = lname
    this.age = age
    this.username = username
    this.password = password
    this.interest = interest
    }
}

class paymentUser extends normalUser{
    constructor(fname, lname, age, username, password, interest, job, creditCard, image){
        super(fname, lname, age, username, password, interest);
        this.job = job 
        this.creditCard = creditCard
        this.image = image
}
}

export let user1 = new normalUser("Jens", "Hansen", "25", "JensHansen99", "lagkage123", ["Pizza", "Jumping", "Fodbold"])
export let user2 = new paymentUser("Kia", "Larsen", "25", "KiaLarsen97", "drømmekage123", ["Pizza", "Dans", "Netflix"], "studentermedhjælper", "123456", image1)


const match = (user1,user2) => {
    return user1.interests.some(r => user2.interests.includes(r));
 };

