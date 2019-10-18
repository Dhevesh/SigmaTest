document.onreadystatechange = function(){
    if (document.readyState === 'complete'){
        $('#loading').remove();


        $.ajax({
            url : 'http://localhost:3000/project/'
        }).done(getProjects);
    
        function getProjects(projects){
            for (project of projects){
                $('#projectTableBody').append(`
                    <tr>
                        <td><a href="">${project.title}</a></td>
                    </tr>
                `);
            }
        }

        $('#projectForm').submit(function(e){
            e.preventDefault();
            let formData = $(this).serialize();
            $.ajax({
                url : 'http://localhost:3000/project',
                data : formData,
                type : 'POST'

            });
        });
    }

}