$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

const url = 'http://localhost:3000/wineList';
let pairs = [];
$('#update').hide();

let changeID = 0;

$.get(url).then(data => {
    data.map(wine => {
        $('tbody').append(
            $(`
            <tr>
                
                <td>${wine.wineName}</td>
                <td>${wine.type}</td>
                <td>
                    <button type="button" data-toggle="tooltip" title="Item will be permanently deleted!" class="btn btn-secondary"
                    onclick = "deleteWine(${wine.id})">Delete</button>
                </td>
                <td>
                    <button class="btn btn-secondary" data-toggle="tooltip" title="Click to change your selection"
                    onclick = "showChangeForm(), changeID = ${wine.id}">Change</button>
                </td>
            </tr>  
            `)
        )
        if(!pairs.includes(`${wine.wineName}`)){pairs.push(`${wine.wineName}`)};
        console.log(pairs);
    }),
    makeCardMerlot();
    makeCardMoscato();
    makeCardPG();
    makeCardPN();
    makeCardRiesling();
    makeCardSB();
},
) ;
function showChangeForm(){
    $('#update').show();
}


$('#updateWines').click(updateWines);
function updateWines(){
    let wineChoice = "";
    $.ajax(`${url}/${changeID}`, {
        method: "PUT",
        data: {
            wineName: $('#wine-updates').val(),
            type: $('#updateTypes').val(),
            
        }
    })
    wineChoice = $('#wine-updates').val();
    alert(`You have sucessfully selected ${wineChoice}`);
};

$('#submitWine').click(function () {
    $.post(url, {
        wineName: $('#wine-select').val(),
        type: $('#type').val(),
    })
});

function deleteWine(id){    
    $.ajax(`${url}/${id}`, {
        type: 'DELETE'
    })
    pairs.splice(`${url}/${id}`,1)    
};

function updateWine(){
    let id = $('#updateId').val();
    $.ajax(`${url}/${id}`, {
        method: "PUT",
        data: {
            wineName: $('#wine-update').val(),
            type: $('#updateType').val(),
        }
    })
};

$('#updateWine').click(updateWine);


function makeCardMerlot(){
    if(pairs.includes('Merlot')) {   
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary">
            <div class="card-header text-bg-dark">
                Merlot
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pair With Red Meat</h5>
                <p class="card-text">Merlot is a dry red wine with a soft, sensual texture and approachable style, 
                it's made from red-skinned grapes that can adapt to a variety of climates to produce food-friendly 
                wines in many price points.</p>
            </div>
        </div> 
        </div>
        `)
    )}
};

function makeCardPN(){
    if(pairs.includes('Pinot Noir')) {
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary">
            <div class="card-header text-bg-dark">
                Pinot Noir
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pairs With Earthy Flavors</h5>
                <p class="card-text">Pinot Noir is made from black-skinned grapes
                and is is dry, light- to medium-bodied, with bright acidity, silky tannins and alcohol that ranges between 12–15%.</p>
            </div>
        </div>
        </div> 
        `)
    )}
};

function makeCardPG(){
    if(pairs.includes('Pinot Gris')) {
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary ">
            <div class="card-header text-bg-dark">
                Pinot Gris
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pairs With Seafood</h5>
                <p class="card-text">Pinot Gris  is full-bodied with a fresh, spicy flavor and notes of tropical fruit, 
                stone fruit, or citrus. Although most pinot gris is dry, a small amount of prized Alsace pinot gris is sweet.</p>
            </div>
        </div> 
        </div>
        `)
    )}
};

function makeCardSB(){
    if(pairs.includes('Sauvignon Blanc')) {
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary">
            <div class="card-header text-bg-dark">
            Sauvignon Blanc
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pairs With Roasted Mushrooms</h5>
                <p class="card-text">Sauvignon Blanc is a green-skinned grape variety that originates from the city of 
                Bordeaux in France and has a unique, herbaceous taste thanks to aromatic substances that are also found in peppers.</p>
            </div>
        </div>
        </div> 
        `)
    )}
};

function makeCardMoscato(){
    if(pairs.includes('Moscato')) {
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary">
            <div class="card-header text-bg-dark">
               Moscato
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pairs With Soft Creamy Cheese</h5>
                <p class="card-text">Moscato  is a style of wine made from muscat grapes. 
                It's famous for sweet flavours of peaches and orange blossom and because it's lower in alcohol 
                than other sparkling wines.</p>
            </div>
        </div>
        </div> 
        `)
    )}
};

function makeCardRiesling(){
    if(pairs.includes('Riesling')) {
    $('#card').append( 
        $(`
        <div class = "col-2">
        <div class="card border-secondary">
            <div class="card-header text-bg-dark">
            Riesling
            </div>
            <div class="card-body text-bg-secondary">
                <h5 class="card-title">Pairs with Sweet and Spicy Flavors</h5>
                <p class="card-text">Riesling is prized for its aging ability, 
                balanced acidity, and floral aroma, Riesling can be a fantastic, unexpected addition to a developed wine enthusiast's palate.</p>
            </div>
        </div>
        </div> 
        `)
    )}
};


