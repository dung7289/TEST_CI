// Bài 1
var n= ' 1  4 1 64 128 5 4 7 32'
console.log('chuoi nhap: ' +n)
//console.log(n.length)
var m=[]
var temp=''

for(var i=0;i<n.length-1;i++){
    if(n[i]!=' '){
        temp=temp+n[i]
    }else{
        if(temp!=''){
            m.push(temp)
        }
        temp=''
    }
}
if(n[n.length-1]!=' '){
    temp=temp+n[i]
    m.push(temp)
    temp=''
}

for(i=m.length-1;i>-1;i--){
    console.log(m[i])
}
// Bài 2
var a=[128,2,4,16,2,128,64,4,7,4,64,16]
var m=a
var kq=false
for( i=0;i<m.length;i++){
    kq=false
    for( j=i+1;j<m.length;j++){
        if(m[i]*m[j]==256){
            console.log(m[i]+' và ' +m[j] +' tại vị trí '+i+' và ' +j )
            kq=true
            break
        }
    }
    if(kq==true){
        for( k=i+1;k<m.length;k++){
            if(m[k]==m[i]){
                m[k]=0
            }
        }
    }
    
}