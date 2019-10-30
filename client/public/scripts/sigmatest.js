document.onreadystatechange = function(){
    if (document.readyState === 'complete'){
        $('#loading').remove();
        
        init();

        function init(){
            showProjects();
        }

        function showProjects(){
            $.ajax({
                url : 'http://localhost:3000/project/'
            }).done(getProjects);
        }
        
    
        $('#projectForm').submit(function(e){
            e.preventDefault();
            let formData = $(this).serialize();
            $.ajax({
                url : 'http://localhost:3000/project',
                data : formData,
                type : 'POST'

            }).done(addProject);
        });

        function getProjects(projects){
            $('#projectTableBody').html('');
            for (project of projects){
                $('#projectTableBody').append(`
                    <tr>
                        <td><a href="/projects/${project.title}/show">${project.title}</a></td>
                    </tr>
                `);
            }
        }

        function addProject(){
            $('input[type="text"]').val("");
            showProjects();
        }

        // $('.table').on('click','a[href!=""]', function(e){
        //     e.preventDefault();
        //     window.location = $(this).attr('href');
            
            
        // });
    }

}