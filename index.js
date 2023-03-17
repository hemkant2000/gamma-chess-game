let chr_inputs = (getPosition) => {
    let character = prompt("Enter chess character numebr")
    let position = prompt("enter chess character position")
    let chr = {1:"king", 2:"rook",3:"bishop",4:"queen",5:"knight",6:"pawn"}

    document.getElementById("chr-pos").innerHTML = "Your input position : "+position;
    document.getElementById("chr-name").innerHTML = `Finding ${String(chr[character])}'s possible position...`;


    getPosition(character, position);
}
let getPosition = (character, position) =>{
        let mp1 = {a:0, b:1, c:2, d:3,e:4,f:5,g:6,h:7}
        let mp2 = {0:"a", 1:"b", 2:"c", 3:"d",4:"e",5:"f",6:"g",7:"h"}
        let c, x, y;
        c = Number(character);y = mp1[position[0]];x = 8-Number(position[1])
        console.log(c,x,y);
        console.log(typeof(c),typeof(x), typeof(y));
        let mat = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ]
        let ans = "this is ans"

        if(c == 1){
            let post = []
            
                if(x-1 >=0){
                    let temp1 = String(mp2[y]) + String(8-(x-1))
                    post.push(temp1);
                }
                if(x+1<=7){
                    let temp1 = String(mp2[y]) + String(8-(x+1))
                    post.push(temp1);
                }
                if(y-1 >=0){
                    let temp1 = String(mp2[y-1]) + String(8-(x))
                    post.push(temp1);
                }
                if(y+1<=7){
                    let temp1 = String(mp2[y+1]) + String(8-(x))
                    post.push(temp1);
                }
            
                ans = "King's posible position is : " + String(post)
            
        }
        document.getElementById("ans").innerHTML = ans

        

}


chr_inputs(getPosition);