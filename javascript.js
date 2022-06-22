$(document).ready(function () {
        $(".addtocart").click(function () {
          var id = $(this).data('id');
          var name = $(this).data('name');
          var price = $(this).data('price');
          alert("Item added to the cart");
          var item={
            id:id,
            name:name,
            price:price,
            qty:1
          }


  var itemString=localStorage.getItem("item");
  var itemArray;
  if (itemString==null) {
    itemArray=Array();
  }else {
    itemArray=JSON.parse(itemString);
  }

    var status=false;

  $.each(itemArray,function(i,v){
    if (id==v.id) {
      status=true;
      v.qty++;
    }
  })

  if (!status) {
    itemArray.push(item);

  }


  var itemData=JSON.stringify(itemArray);

  localStorage.setItem("item",itemData)

        })
      })