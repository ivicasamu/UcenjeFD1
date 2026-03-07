$(document).foundation();

$('#promjeniNaslov').click(function(){
    console.log('Kliknuo sa Simple button');

    $('#naslov').text('Dobrodošli');
    return false;
});

$('#sakrijKomponente').click(()=>{
    console.log('može arrow funkcija');
    $('#komponente').hide();
    return false;
});

$('#pokaziKomponente').dblclick(()=>{
    $('#komponente').show();
});

$('#oblikujNaslov').click(()=>{
    $('#naslov').css('color', 'red');
    $('#naslov').css('text-decoration', 'underline');
    $('#naslov').after('<hr />');
    return false;
});

const boja = 'rgb(214.8186602871, 235.9894736842, 250.0313397129)';

$('.callout.primary').mouseover(function(){
    $(this).css('background-color','#eee');
});

$('.callout.primary').mouseout(function(){
    $(this).css('background-color',boja);
});

$('#unos').keyup(function(e){
    if(e.key==='b' || e.key==='B'){
        $('p').css('color','red');
    }
});

$('#unos').keyup(function(e){
    if(e.key==='r' || e.key==='R'){
        $('p').css('color','black');
    }
})