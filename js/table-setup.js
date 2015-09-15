jQuery(document).ready(function(){ 

//    console.log($("div.dropdown").outerWidth());
    $("ul.dropdown-menu").css("width", $("div.dropdown").outerWidth() + "px");
    $("ul.notification-dropdown").css("width", "250px");
    
    var numNewNotifications = 3;
    if(numNewNotifications > 0) {
        $("div.notification-badge").css("display", "block");
        $("div.notification-badge").text(numNewNotifications);
    }
    else {
        $("div.notification-badge").css("display", "none");
    }
    
    //json for audio data
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://104.236.252.77/api/v0/users", false);
    xmlHttp.send( null );
    var users = xmlHttp.responseText;
    
    
//    var audio = { "dataArray":
//    
//        
//         [
//            
//            {"id":1,
//             "soundTitle":"Band Stuff",
//             "cellType":"folderCell",
//             "owner":"me",
//             "isShared":"NO",
//             "sharedWith":[
//                {"id":"person-id", "avatar":"avatar url"},
//                {"id":"person-id", "avatar":"avatar url"},
//                {"id":"person-id", "avatar":"avatar url"}
//             ],
//             "parentId":-1,
//             "date-created":"11/22/15"
//            },
//            
//        
//        
//            
//            {"id":2,
//             "soundFile":"url to stream audio",
//            "soundLength":"0:34",
//             "soundTitle":"Crazy awesome riff",
//             "cellType":"normal",
//             "owner":"me",
//             "isShared":"NO",
//             "sharedWith": [
//                {"id":"person-id", "avatar":"avatar url"},
//                {"id":"person-id", "avatar":"avatar url"}
//             ],
//             "parentId":-1,
//             "date-created":"11/10/15"
//            },
//        
//            
//            {"id":3,
//             "soundFile":"url to stream audio",
//            "soundLength":"2:15",
//             "soundTitle":"Some guitar ideas",
//             "cellType":"normal",
//             "owner":"me",
//             "isShared":"NO",
//             "sharedWith": [
//                
//             ],
//             "parentId":-1,
//             "date-created":"11/14/15"
//            },
//        
//           
//            {"id":4,
//             "soundFile":"url to stream audio",
//            "soundLength":"1:41",
//             "soundTitle":"Vocal ideas",
//             "cellType":"normal-received",
//             "owner":"craig.adams@gmail.com",
//             "isShared":"YES",
//             "sharedWith": [
//                {"id":"person-id", "avatar":"avatar url"},
//                {"id":"person-id", "avatar":"avatar url"},
//                {"id":"person-id", "avatar":"avatar url"}
//             ],
//             "parentId":1,
//             "date-created":"11/28/15"
//            }
//            
//        ] //end audioFiles
//    //end audioTableData
//};
  
    

    
    
    
    
    
    
    
    var audioStuff = new Object();
    
    localStorage.setItem('session', JSON.stringify(users));
    
//    console.log(localStorage.getItem('session'));
    
    window.downloadedData = JSON.parse(localStorage.getItem('session'));

//    console.log(downloadedData);
//    console.log(downloadedData.dataArray[0].parentId);
    
    //set up the table dynamically using this JSON (downloadedData). Will come from server as a string, so it should be stringified first, then converted back to this format, then used for the table.
    
    
   /*
    <tr class="folderCell">
        <th class="th-checkBox">
            <input type="checkbox" class="audio-checkbox"></input>
        </th>
        <th>
            <span class="folder-icon"></span>
            <div class="audioTitle">Band Stuff</div> 
            
            <div class="cellMedia">
                <audio controls>
                  <!--<source src="horse.ogg" type="audio/ogg">
                  <source src="horse.mp3" type="audio/mpeg">--
                  Your browser does not support the audio element.
                </audio>
            </div>
            
            
        </th>
        <th>
            <ul class="sharedWithAvatars">
                <li class="share-avatar"></li>
                <li class="share-avatar"></li>
                <li class="share-avatar"></li>

            </ul>
        </th>
            <th>11/22/15</th>
            <th>Me</th>
            <th class="th-actions"></th>
        </tr>
    */
    
    
    for(var i = 0; i < downloadedData.dataArray.length; i++) {
//        console.log("data-array length: " + downloadedData.dataArray.length);
     
        var index = downloadedData.dataArray[i];
        
        if(index["parentId"] == -1) {
            
            console.log("building tr");
            var tr = "";
            tr += "<tr data-id='" + index["id"] + "' class=" + index["cellType"] + ">";
            tr += "<th class='th-checkbox'>";
            tr += "<input type='checkbox' class='audio-checkbox'></input></th>";
            
            if(index["cellType"] == "folderCell") {
                 tr += "<th><span class='folder-icon'></span>";
                tr += "<div class='audioTitle'>" + index["soundTitle"] + "</div>";
            }
            else if(index["cellType"] == "normal") {
                 tr += "<th><span class='audio-icon'></span>";
                tr += "<div class='audioTitle'>" + index["soundTitle"] + "</div>";
                
                //need to set the type based on the file type, for playback on html, should always be mp3. But when the download, if they have the upgraded account, they download the uncompressed audio. So maybe the type doesn't need to be set, leave it as mpeg.
                tr += "<div class='cellMedia'><audio controls><source src='" + index["soundFile"] + "' type='audio/mpeg'>Your browser doe not support HTML audio.</audio></div>";
                
            }
            else if(index["cellType"] == "normal-received") {
                tr += "<th><span class='audio-received-icon'></span>";
                tr += "<div class='audioTitle'>" + index["soundTitle"] + "</div>";
                tr += "<div class='cellMedia'><audio controls><source src='" + index["soundFile"] + "' type='audio/mpeg'>Your browser doe not support HTML audio.</audio></div>";
            }
            else {
                tr += "<th><span class='folder-received-icon'></span>";
                tr += "<div class='audioTitle'>" + index["soundTitle"] + "</div>";
            }
            
           
            
            
            
            
            tr += "</th><th><ul class='sharedWithAvatars'>";

            for(var x = 0; x < index["sharedWith"].length; x++) {
                tr += "<li class='share-avatar'></li>";   
            }

            tr += "</ul></th><th>" + index["date-created"] + "</th>";
            
            //if owner is email, get their avatar
            tr += "<th>" + index["owner"] + "</th>";
            tr += "<th class='th-actions'></th></tr>";
            
            $(".audioTable").append(tr);
//            console.log("tr: " + tr);
        }
    }
    
});