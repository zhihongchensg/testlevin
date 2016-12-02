$(document).ready(function () {
  console.log('good to go go go ')

  $('#usersubmit').click(function(e) {
    e.preventDefault();
    var data = $('#userinput').val()
    console.log('this is user input' + data)
    console.log(data);
    $.ajax({
      method: 'get',
      dataType: "json",
      url: '/index/listmatch',
      data:{data: 'data'}
    }).done(function() {

      console.log('done')
      window.location = '/listmatch'
    })
  })
})
