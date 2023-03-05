

testTextField.addEventListener('click', function(event) {
    
    let a = prompt('Введите новую ссылку', 'vk.com');
    testTextField.textContent = a;
    console.log(a);
    event.preventDefault();
   
})
