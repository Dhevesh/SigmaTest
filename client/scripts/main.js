document.onreadystatechange = function(){
    if (document.readyState === 'complete'){
        $('#loading').remove();


        $.ajax({
            url : 'http://localhost:3000/project/'
        }).done(getProjects);
    
        function getProjects(projects){
            console.log(projects.title);
        }
    }
    
    
}