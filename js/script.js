
jQuery(document).ready(function ($){

    //$ can only be used within this function -- allows to interact with DOM
    //$ naming convention, treated as a letter. If using Jquery, setting var with jquery object, use $ before.
  
   
  
        var request = axios.get('http://csc225.mockable.io/books')
        request.then(function(){
            $('#overlay').hide();
        
        
     });
    
        function createBookListItem(book){
            var $li = $('<li>'); //<li></li>
    
            $li.addClass('list-group-item hover-invert cursor-pointer');
            $li.html(book.title); //<li class="list-group-item">(TEXT)</li>
    
            $li.data('bookId', book.id);
            return $li;
        }
        //using axios to get the API info for the collection of movies
        var request = axios.get('http://csc225.mockable.io/books');
    
       request.then(function(response){
           //loops through array forEach();
           response.data.forEach(function(book){
               $('#book-list').append( createBookListItem(book));

               
               console.log(response.data);
    
               //using html will replace every iteration of the same block, use append to add on to the list.
           });

    
         $('.list-group-item').on('click', function (){
    
        
                $('#loading').removeClass('hide');
            
            //takes out all of the active classes in current page
    
            $('.list-group-item').removeClass('active');

          
             var bookId = $(this).data('bookId');
           
             $(this).addClass('active');
             $('.card').addClass('hide');
             axios.get('http://csc225.mockable.io/books/' + bookId).then(function(response){
    
                $('#loading').addClass('hide');
                $('.card').removeClass('hide');

                var $img = $('<img>').attr('src', response.data.cover).attr('alt', response.data.title);

                $img.addClass('card-img-top');

                //author country language link pages title
                var $author = 'Author: ' + response.data.author;
                var $title = response.data.title;
                var $country = 'Country: ' + response.data.country;

                var $language = 'Language: ' + response.data.language;
                var $link = response.data.link;
                var $pages = 'Pages: ' + response.data.pages;

                $('#topPic').html($img);
                
                
                $('.card-title').html($title);
                $('#author').html($author);
                $('#country').html($country);
                $('#language').html($language);
                $('#link').html($link);
                $('#pages').html($pages);
               
               
             })
         })
        })
    
        console.log('FINITO');

    })
