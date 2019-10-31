document.onreadystatechange = function(){
    if (document.readyState === 'complete'){

        function removeLoading(){
            $('#loading').remove();
        }
            
        let projectId = $.ajax({
            url : window.location.href,
            async : false,
        }).responseJSON;

        $.ajax({
            url : "http://localhost:3000/project/" + projectId,
            success : function(){
                removeLoading();
            }, 
            error : function(xhr, status, error){
                removeLoading();
                console.log(status);
                console.log(error);
            }

        }).done(renderProject);
            
            
        function renderProject(project){
            $('#pageTitle').text(project.title);
            $('#showContainer').append(`
                <div>${project.title}</div>
            `
            );
            if (project.description){
                $('#showContainer').append(`
                    <div>${project.description}</div>
                `);
            }
            if (project.testruns.length === 0){
                $('#showContainer').append(`
                    <div>Project does not contain any test runs</div>
                `);
            } else {
                // display the project runs here
            }
            if (project.testsuites.length === 0){
                $('#showContainer').append(`
                    <div>Project does not contain any test suites</div>
                `);
            }

        }

        function makeActive(){
            $('.active').removeClass("active");
            $('#overview').addClass("active");
        }

        makeActive();
    }
}