jQuery(document).ready(function(){ 
    
    var numChecked = 0;
    
    //check for checked boxes on reload
    $(function() {
        var boxes = $(document).find('input[type=checkbox].audio-checkbox');
        $(boxes).each(function() {
            
            if($(this).is(":checked")) {
                numChecked++;
            }
        });
        
        checkNumBoxesChecked();
    });
    
    var checkNumBoxesChecked = function() {
         if(numChecked == 0) {
           setZeroChecked();
       }
        else if(numChecked == 1) {
            setOneChecked();
        }
        else {
            setTwoOrMoreChecked();
        }
    };
    
    //zero check boxes checked, which tools active
    var setZeroChecked = function() {
        
        if($(".newFolderLi").hasClass("inactive")) {
            $(".newFolderLi").removeClass("inactive");
            $(".newFolderLi").addClass("active");
        }
        
        if($(".uploadLi").hasClass("inactive")) {
            $(".uploadLi").removeClass("inactive");
            $(".uploadLi").addClass("active");
        }
        
        if($(".shareLi").hasClass("active")) {
            $(".shareLi").removeClass("active");
            $(".shareLi").addClass("inactive");
        }
        
        if($(".downloadLi").hasClass("active")) {
            $(".downloadLi").removeClass("active");
            $(".downloadLi").addClass("inactive");
        }
        
        if($(".renameLi").hasClass("active")) {
            $(".renameLi").removeClass("active");
            $(".renameLi").addClass("inactive");
        }
        
        if($(".deleteLi").hasClass("active")) {
            $(".deleteLi").removeClass("active");
            $(".deleteLi").addClass("inactive");
        }
        
    };
    
    //1 check box checked, which tools active
    var setOneChecked = function() {
        //all tools active?
         if($(".newFolderLi").hasClass("inactive")) {
            $(".newFolderLi").removeClass("inactive");
            $(".newFolderLi").addClass("active");
        }
        
        if($(".uploadLi").hasClass("inactive")) {
            $(".uploadLi").removeClass("inactive");
            $(".uploadLi").addClass("active");
        }
        
        if($(".shareLi").hasClass("inactive")) {
            $(".shareLi").removeClass("inactive");
            $(".shareLi").addClass("active");
        }
        
        if($(".downloadLi").hasClass("inactive")) {
            $(".downloadLi").removeClass("inactive");
            $(".downloadLi").addClass("active");
        }
        
        if($(".renameLi").hasClass("inactive")) {
            $(".renameLi").removeClass("inactive");
            $(".renameLi").addClass("active");
        }
        
        if($(".deleteLi").hasClass("inactive")) {
            $(".deleteLi").removeClass("inactive");
            $(".deleteLi").addClass("active");
        }
    };
    
    //2+ check boxes checked, which tools active
    var setTwoOrMoreChecked = function() {
        if($(".newFolderLi").hasClass("inactive")) {
            $(".newFolderLi").removeClass("inactive");
            $(".newFolderLi").addClass("active");
        }
        
        if($(".uploadLi").hasClass("inactive")) {
            $(".uploadLi").removeClass("inactive");
            $(".uploadLi").addClass("active");
        }
        
        if($(".shareLi").hasClass("inactive")) {
            $(".shareLi").removeClass("inactive");
            $(".shareLi").addClass("active");
        }
        
        if($(".downloadLi").hasClass("inactive")) {
            $(".downloadLi").removeClass("inactive");
            $(".downloadLi").addClass("active");
        }
        
        if($(".renameLi").hasClass("active")) {
            $(".renameLi").removeClass("active");
            $(".renameLi").addClass("inactive");
        }
        
        if($(".deleteLi").hasClass("inactive")) {
            $(".deleteLi").removeClass("inactive");
            $(".deleteLi").addClass("active");
        }
    };
    
    

    $("#tools li").on("click", function() {
        
        if($(this).hasClass("active")) {
            
            if($(this).find("div").hasClass("newfolder") || $(this).find("div").hasClass("upload")) {
                
                 if($(this).find("div").hasClass("newfolder")) {
                    console.log("newfolder");
                     
                }
                else if($(this).find("div").hasClass("upload")) {
                    console.log("upload");

                }
            }
            else {
                
                // ******************** get all the checked objects *********************
                var checkedItems = findWhatsChecked();
                //create new array to store the objects we are sharing
                    var itemsToModify = new Array();
                    
                    //iterate through checked boxes
                    $(checkedItems).each(function(index, value) {
                        
                        
                        //compare this id (the value from the data-id html attr)
                        var searchValue = value;
//                        console.log("the value: " + value);
                        
                        //to match the id in the actual JSON variable id
                        $(window.downloadedData.dataArray).each(function(index, value) {
//                            console.log("id from downloadedData: " + value["id"]);
//                            console.log("id from chosen sound: " + searchValue);
                            
                            //if they match
                            if(value["id"] == searchValue) {
//                                console.log("they match: " + searchValue + ", " + value["id"]);
                                //grab this object, put it in itemsToShare array
                                itemsToModify.push(window.downloadedData.dataArray[index]);
//                                console.log("itemsToShare: " + itemsToShare.length);
                            }
                            else {
                                
                            }
                        });
                        
                    });
                
                
                
                // ******************* share *******************
                
                if($(this).find("div").hasClass("share")) {
                
                    $(itemsToModify).each(function(index, value) {
                        //do the sharing here -- will probably need to launch some sort of dialog and let them choose who to share with.
                        console.log("share: " + value["id"] + ", " + value["soundTitle"]); 
                    });
                    
                }
                else if($(this).find("div").hasClass("download")) {
                    
                    $(itemsToModify).each(function(index, value) {
                        //download the files - zip multiple, zip folders
                        console.log("download: " + value["id"] + ", " + value["soundTitle"]); 
                    });
                    

                }
                else if($(this).find("div").hasClass("rename")) {
                    
                    $(itemsToModify).each(function(index, value) {
                        //launch dialog to rename this object
                        console.log("rename: " + value["id"] + ", " + value["soundTitle"]); 
                    });
                    
                }
                else if($(this).find("div").hasClass("delete")) {
                    
                    $(itemsToModify).each(function(index, value) {
                        //delete these objects, update the server, update the app
                        console.log("delete: " + value["id"] + ", " + value["soundTitle"]); 
                    });
                    
                }
            }   
    }
        else {
            console.log("inactive");   
        }
        
    }); /* end tools click */
  
    var findWhatsChecked = function() {
        
        var arrayOfStuff = new Array();
        $('input[type=checkbox]').each(function() {
            if(this.checked) {
                console.log("checked");
                var parent = $(this).parent().parent().attr("data-id");
                arrayOfStuff.push(parent);
            }
        });
        console.log("array of stuff: " + arrayOfStuff);
        return arrayOfStuff;
    };
    
    
    $(document).on("change", "input[type=checkbox].audio-checkbox", function(){

            if (this.checked) {
                numChecked++;
                
            }
            else {
                numChecked--;  
                
            }
            
            checkNumBoxesChecked();
    });
    
    $(document).on("click", "input[type=checkbox].audio-checkbox", function(e) {
         e.stopPropagation();
        //stops row from expanding
    });
    
    
    //change this to show a play button, expand when playing
    
    $(document).on("click", ".audioTable tr", function() {
        
        console.log("clicked on a table row");
        if($(this).hasClass("normal")) {
        
            //check if another cell is expanded, close it

            if($(this).hasClass("expanded")) {
                $(this).removeClass("expanded");
                $(this).find(".cellMedia").css("display", "none");
            }
            else {
                //search to see if another tr has the expanded class

                var expanded = $(".audioTable").find(".expanded");
                console.log("num expanded: " + expanded.length);
                if(expanded.length > 0) {
                    $(expanded).each(function() {
                        $(this).removeClass("expanded");
                        $(this).find(".cellMedia").css("display", "none");
                    });
                }

                $(this).find(".cellMedia").css("display", "inline-block");
                $(this).addClass("expanded");
            }
        }
        
        else if($(this).hasClass("folderCell")) {
            console.log("clicked on a folder");
            //need to go to the folder page
            window.location.href = "file2.html";
        }
        else {
            console.log("clicked on the header");
        }
        
    });
    
    $(document).on("click", ".cellMedia", function(e) {
        e.stopPropagation();
        console.log("cellmedia click"); 
    });
    
});