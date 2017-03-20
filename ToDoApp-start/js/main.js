    $(document).ready(function() {

    var list = [];

    var activelist = list.filter(function(i) {
        if (i.status === false) {
            return i;
        }
    })

    var completelist = list.filter(function(i) {
        if (i.status === true) {
            return i;
        }
    })

    function Todo(i) {
        this.name = i;
        this.status = false;
        this.id = Date.now();
    }


    $('form').on("submit", function(e) {
        e.preventDefault();

        var content = $('input').val();

        var todolist = new Todo(content);

        list.push(todolist);

        $('.items').append(`
			<li>
			    <article>
			        <button data-id="${todolist.id}" class='check'></button>
			        <p>${content}</p>
			        <input type='text' class='edit-todo' value='learn html'>
			        <button data-id="${todolist.id}" class='delete'>X</button>
			    </article>
			</li>
		`)
    })

    $('body').on('click', '.delete', function() {
        let id = $(this).data('id');
        console.log(id);
        list.forEach(function(i) {
            if (i.id === id) {
                list.splice(list[i], 1);
            }
        })
        $(this).parent().parent().remove();

    })
    $('body').on('click', '.check', function() {
        let id = $(this).data('id');
        _this = this;
        list.forEach(function(i) {
            if (i.id === id) {
                if (i.status === false) {
                    i.status = true;
                    $(_this).parent().addClass('completed');
                } else {
                    i.status = false;
                    $(_this).parent().removeClass('completed');

                }
            }
        })
    })
    $('.show-all').click(function() {
        $('.items').html('');
        list.forEach(function(item) {
            if(item.status)
            {
            $('.items').append(`
                <li>
                    <article class="completed">
                        <button data-id="${item.id}" class='check'></button>
                        <p>${item.name}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${item.id}" class='delete'>X</button>
                    </article>
                </li>
            `)
            }else{
                $('.items').append(`
                <li>
                    <article>
                        <button data-id="${item.id}" class='check'></button>
                        <p>${item.name}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${item.id}" class='delete'>X</button>
                    </article>
                </li>
            `)
            }
        })
    })



    $('.show-completed').click(function() {
        var completelist = list.filter(function(i) {
            if (i.status === true) {
                return i;

            }
        })
        $('.items').html('');


        completelist.forEach(function(item) {
            $('.items').append(`
				<li>
				    <article class="completed">
				        <button data-id="${item.id}" class='check'></button>
				        <p>${item.name}</p>
				        <input type='text' class='edit-todo' value='learn html'>
				        <button data-id="${item.id}" class='delete'>X</button>
				    </article>
				</li>
			`)
        })
    })


    $('.show-active').click(function() {
        var activelist = list.filter(function(i) {
            if (i.status === false) {
                return i;
            }
        })
        $('.items').html('');

        activelist.forEach(function(item) {
            $('.items').append(`
				<li>
				    <article>
				        <button data-id="${item.id}" class='check'></button>
				        <p>${item.name}</p>
				        <input type='text' class='edit-todo' value='learn html'>
				        <button data-id="${item.id}" class='delete'>X</button>
				    </article>
				</li>
			`)
        })
    
    })

});
