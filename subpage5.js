function mymessage()
{
alert("Congratulations! Your information has been submitted successfully!");
}
var blog_titles = ['1', '2','3','4'];
var blog_usernames = ['blog_user1', 'blog_user2','blog_user3','blog_user4'];
function publish() {

    i = blog_titles.length;
    var title_id = "title" + i;
    var user_id = "username" + i;
    var post_id = "post" + i;

    var title = document.getElementById("title_entry_text").value;
    var username = document.getElementById("username_entry_text").value;
    var content = document.getElementById("content_entry_text").value;

    if (title != "" && username != "" && content != "") {
        blog_titles.push(title);
        var text_title = document.createTextNode(title);
        var text = document.createTextNode("View details »");
        var p_title = document.createElement("h2");
        var a_title = document.createElement("p");
        var div_title = document.createElement("div");
        var button_title = document.createElement("p");

        var button_a = document.createElement("a");
        button_a.setAttribute("class","btn btn-secondary");
        button_a.setAttribute("href","#");
        button_a.setAttribute("role","button");
        button_a.setAttribute("p","button");
        button_a.appendChild(text);
        button_title.appendChild(button_a);
        a_title.setAttribute("href", "blog_content.html");
        div_title.setAttribute("class", "title");
        div_title.setAttribute("id", title_id);

        p_title.appendChild(text_title);
        a_title.appendChild(p_title);
        div_title.appendChild(a_title);

        blog_usernames.push(username);
        var text_username = document.createTextNode(content);
        var p_username = document.createElement("p");
        var div_username = document.createElement("div");
        div_username.setAttribute("class", "username");
        div_username.setAttribute("id", user_id);
        p_username.appendChild(text_username);
        div_username.appendChild(p_username);

        var container = document.createElement("div");
        container.setAttribute("class", "col-6 col-lg-12");
        container.setAttribute("id", post_id);
        
        container.appendChild(div_title);
        container.appendChild(div_username);
        //container.appendChild(button_a);
        container.appendChild(button_title);

        var element = document.getElementById("blog");
        element.appendChild(container);

        document.getElementById("title_entry_text").value = "";
        document.getElementById("username_entry_text").value = "";
        document.getElementById("content_entry_text").value = "";
        alert("Thanks for your sharing");
    }
    else if (title == "" && username == "" && content == "") {
        alert("Please enter a title, username, and content");
    }
    else if (title == "" && username == "") {
        alert("Please enter a title and username");
    }
    else if (title == "" && content == "") {
        alert("Please enter a title and content");
    }
    else if (username == "" && content == "") {
        alert("Please enter a username and content");
    }
    else if (title == "") {
        alert("Please enter a title");
    }
    else if (username == "") {
        alert("Please enter a username");
    }
    else if (content == "") {
        alert("Please enter content");
    }
}