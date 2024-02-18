
const allButton =document.getElementsByClassName("add-btn");
 let count = 0;
 let count2 = 0;
 
for(const btn of allButton){
   btn.addEventListener('click', function(e){
     const seatName = e.target.innerText

    count = count + 1;
    count2 = count2 + 550;
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