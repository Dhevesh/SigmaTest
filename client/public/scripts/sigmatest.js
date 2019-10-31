document.onreadystatechange = function(){
    if (document.readyState === 'complete'){

        init();

        function init(){
            showProjects();
            $('#pageTitle').text("SigmaTest");
        }

        function addLoading(){
            $('#homeContainer').append(`
                <div class="loading" id="loading">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            `);
        }

        function removeLoading(){
            $('#loading').remove();
        }

        function renderHomePage(){
            $('#homeContainer').html("");
            $('#homeContainer').append(`
            <h1>SigmaTest</h1>
            <div class="form mb-4">
            <form id="projectForm">
                <div class="form-group">
                    <input class="form-control" type="text" name="project[title]" placeholder="Project Title" required autofocus>
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="project[description]" id="" cols="30" rows="2" placeholder="Project Description [Optional]"></textarea>
                </div>
                
                <button class="btn btn-md btn-primary" id="btnAddProject">Submit</button>
            </form>
            </div>
            <table class="table">
                <tbody id='projectTableBody'>
                    
                </tbody>
            </table>
            `);
        }

        function showProjects(){
            $.ajax({
                url : 'http://localhost:3000/project/'
            }).done(getProjects)
            .fail(function(xhr, status, error){
                removeLoading();
                $('#homeContainer').append(`
                    <div>Could not load projects. Please refresh the page.</div>
                `);
            });
        }

        function getProjects(projects){
            removeLoading();
            renderHomePage();
            if (projects.length == 0){
                $('#homeContainer').append(`
                    <div id="noProjectDiv">No projects found</div>
                `);
            } else {
                $('#projectTableBody').html('');
                for (project of projects){
                    $('#projectTableBody').append(`
                        <tr>
                            <td><a href="/project/${project._id}">${project.title}</a></td>
                        </tr>
                    `);
                }
            }
            
        }

        function addButtonLoading(){
            $('#btnAddProject').text("Loading...");
            $('#btnAddProject').prepend(`
            <span id="btnLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            `);
        }
        function removeButtonLoading(){
            $('#btnLoading').remove();
            $('#btnAddProject').text("Submit");
        }

        $('#homeContainer').on("submit", "#projectForm", function(e){
            e.preventDefault();
            addButtonLoading();
            let formData = $(this).serialize();
            $.ajax({
                url : 'http://localhost:3000/project',
                data : formData,
                type : 'POST'

            }).done(addProject)
            .fail(function(xhr, status, error){
                removeButtonLoading();
                console.log("could not add project"); // to be replaced with a message to the user
            });
            
        });
        function addProject(project){
            removeButtonLoading();
            $('#noProjectDiv').remove();
            $('input[type="text"]').val("");
            $('#projectTableBody').append(`
                <tr>
                    <td><a href="/project/${project._id}">${project.title}</a></td>
                </tr>
            `);
        }
    }

}