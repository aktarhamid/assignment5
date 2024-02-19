
const allButton =document.getElementsByClassName("add-btn");
 let count = 0;
 let count2 = 0;
 let count3 = 40;
 
for(const btn of allButton){
   btn.addEventListener('click', function(e){
     const seatName = e.target.innerText

    count = count + 1;
    count2 = count2 + 550;
    count3 = count3 - 1;
    // console.log(count3);
    // document.getElementById("seat-number").innerText=  count3;
    if(count <= 4){
        btn.classList.add('bg-green-400')
        // Append Container.......
        const selectedContainer = document.getElementById('Selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerHTML = 550;
        li.append(p);
        li.append(p2);
        li.append(p3);
        selectedContainer.append(li);
        li.style.flex;
        // Append Container end.....
 

       setInnerText('seat-number', count3);
       setInnerText('total-price', count2);
       setInnerText('grand-total', count2);
        setInnerText('card-count',count);
        // btn.classList.add('bg-green-400')
    }
    else{
        alert('You already buy 4 seats you dont buy more.....');
        return;
    }
   })
  
}
  function setInnerText(id,value){
    document.getElementById(id).innerText = value;
  }


 document.getElementById('cupon-input-fild').addEventListener('keyup', function(e){
     const text = e.target.value;
     const deletElemnt = document.getElementById('btn-apply');
    if(text === 'new15'){
          deletElemnt.removeAttribute('disabled');
          return;
    }
    else  if(text==='couple 20'){
        deletElemnt.removeAttribute('disabled');
          return;
    }
    else{
        deletElemnt.setAttribute('disabled',true)
    }
 })
    
    document.getElementById('btn-apply').addEventListener('click',function(){
       const discountPrice = document.getElementById('total-price').innerText;
         const convertedDiscount =  parseInt(discountPrice);
         const input = document.getElementById('cupon-input-fild').value;
        //  console.log(input);
       if( convertedDiscount === 2200 && input === 'new15'){
        console.log('aktar hossen is a good student');
       }
       if( convertedDiscount === 2200 && input === 'couple 20'){
        console.log('aktar hossen is a good student');
       }

       else{
        console.log('aktar hossen is not a good student')
       }
       
    })

    // const input = document.getElementById('cupon-input-fild').value;
    // console.log(input);