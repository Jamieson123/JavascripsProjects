let data = [
    {
      name: 'Lane',
      age: '26'
    },
    {
      name: 'Kyler',
      age: '25'
    },
    {
      name: 'Reno',
      age: '28'
    },
    {
      name: 'Carlos',
      age: '27'
    },
    {
      name: 'Prest',
      age: '25'
    },
    {
      name: 'Linh',
      age: '100'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');
