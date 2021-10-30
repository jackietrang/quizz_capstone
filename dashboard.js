// --- Experiment page
// Experiment Title(+) to add a whole new experiment
$(document).ready(function() {
    var a = 0
    var b = 0
    $('.add-page-button.exp').on("click", duplicate)
    function duplicate() {
        // clone the whole div
        var original = document.getElementById('main-wrap-exp' + a)
        var clone = original.cloneNode(true)
        clone.id = "main-wrap-exp"+ ++a
        // fixed bc "absolute" makes overflow
        original.style.position="fixed"
        original.style.display ="none"
        original.parentNode.appendChild(clone)
    
        // clone Plotting Data tab
        var tab_original = document.getElementById('title-tab-exp'+b)
        var tab_clone = tab_original.cloneNode(true)
        tab_clone.id = "title-tab-exp"+ ++b
        tab_original.append(tab_clone)

    }
    
        // Click X to close tab
        $('#title-tab-exp' + b).on('click', function(){
            // var original = document.getElementById('wrapping' + i)
            $('#main-wrap-exp' +a).remove()
            $('#title-tab-exp' +b).remove()
            a = a-1
            b = b-1
    
            document.getElementById('main-wrap-exp'+ a).style.display ="block"
            document.getElementById('main-wrap-exp'+ a).style.position="relative"   
    
            console.log("i",a)
            console.log("j",b)
        })

        // The flow chart doesn't work here for some reasons
    })
    

// Slide toggle Live Experiment
$(document).on('click', '#toggle1',  function (e) {
    $('.scroll-area.live').slideToggle("slow");   
    if ($('#toggle1').css('transform')=='none') {
        $('#toggle1').css({'transform': 'rotate(-180deg)'});
    } else {
        $('#toggle1').css({'transform': ''});
    };         
});


// slide toggle Saved Experiment
$(document).on('click', "#toggle2",  function (e) {
    $('.scroll-area.saved').slideToggle("slow");   
    if ($('#toggle2').css('transform')=='none') {
        $("#toggle2").css({'transform': 'rotate(-180deg)'});
    } else {
        $("#toggle2").css({'transform': ''});
    };         
});

// Delete when click, open in new window 
$(document).on('click', '#trash', function (e) {
    $('#trash').parent().remove();
});

// Open a new tab
$(document).on('click', '.export', function (e) {
    // open a pseudo-website atm
    window.open('https://www.google.com/', 'name');
});
 
//---- Live experiment page

//Slide toggle

$(document).on('click', '#toggle-exp-1',  function (e) {
    $('#exp-1').slideToggle("slow");   
    if ($('#toggle-exp-1').css('transform')=='none') {
        $('#toggle-exp-1').css({'transform': 'rotate(-180deg)'});
    } else {
        $('#toggle-exp-1').css({'transform': ''});
    };         
});


$(document).on('click', '#toggle-exp-2',  function (e) {
    $('#exp-2').slideToggle("slow");   
    if ($('#toggle-exp-2').css('transform')=='none') {
        $('#toggle-exp-2').css({'transform': 'rotate(-180deg)'});
    } else {
        $('#toggle-exp-2').css({'transform': ''});
    };         
});

$(document).on('click', '#toggle-exp-3',  function (e) {
    $('#exp-3').slideToggle("slow");   
    if ($('#toggle-exp-3').css('transform')=='none') {
        $('#toggle-exp-3').css({'transform': 'rotate(-180deg)'});
    } else {
        $('#toggle-exp-3').css({'transform': ''});
    };         
});


// tag inputs
function printTag()
{
    var tag_input = $('#tag-txt').val(); 
    var a = '<p>'+tag_input+'</p>' 
    var b = '<div class="delete-tag">X</div>'
    $('.white-input-box').append('<div class="tag">'+ a +b +'</div>')
    $('#tag-txt').val("") //auto-clear input box
 
};


// Delete when click, open in new window 
$(document).on('click', ".delete-tag", function (e) {
    // use this to delete only the current one
    $(this).parent().remove(); 
});

$('#tag-txt').keypress(function(e) {
    if (e.which==13) {
        printTag();
    }
});

// create tags upon hitting enter
$(document).on('keypress', '#tag-txt', function(e) {
    if (e.which==13) {
        printTag();
    }
});
// Send Control PopUp
$(document).ready(function(){
    $(document).on('click', '.send-controls', function(){
        $('.absolute-container').css({'display':'block'})
        $('.pop-up-overlay').css({'display':'block'})
        $('.controls-container').css({'visibility':'visible', 'z-index':3})
    })

    // Make the pop up disappear
    $(document).on('click', '#close-set-control', function() {
        $('.absolute-container').css({'display':'none'})
        $('.pop-up-overlay').css({'display':'none'})
        $('.controls-container').css({'visibility':'hidden'})
    });
})

// reset input
$(document).on('click', '.reset-button', function(e) {
    $(this).closest('tr').find('.sc-input').val("");

});

// only choose 1 radio input at a time
$(document).ready(function(){
    $('input:radio').click(function() {
        $('input:radio').not(this).prop('checked', false);
    });
});
//-------- Start Experiment Popup
// Make it appear
$(document).ready(function(){
    $(document).on('click', '#start-button-id', function(){
        $('.pop-up-overlay').css({'display':'block'})
        $('.start-experiment-container').css({'visibility':'visible'})
    })
    

    // Make the pop-up disappear
    $(document).on('click', '#close-start-exp', function(e) {
        $('.pop-up-overlay').css({'display':'none'})
        $('.start-experiment-container').css({'visibility':'hidden'})
    });
})

$(document).on("click", "#fill-date-btn", function(e) {
    var now = new Date();
    //convert into mm-DD-yyy format from now
    date = [
        now.getFullYear(),
        ('0' + (now.getMonth() + 1)).slice(-2),
        ('0' + now.getDate()).slice(-2)
    ].join('-');
    $('#fill-date-input').val(date);
});

//disable and enable End date input with the
function toggler(){
    document.getElementById("end-date-input").disabled = !document.getElementById("end-date-input").disabled;
    document.getElementById("end-date-input-1").disabled = !document.getElementById("end-date-input-1").disabled;
};

//------ FLOW CHART
// test.js
document.addEventListener("DOMContentLoaded", function (event) {
    chk_facility = document.getElementById('fac-r1-input');
    chk_test = document.getElementById('test-r1-input');
    chk_probe = document.getElementById('probe-r1-input');
    chk_cmu = document.getElementById('cmu-r1-input');
    chk_probe_pop = document.getElementById('#probe-dropdown-input');

    
    tstation = document.querySelector('.test-r1');
    tstation2 = document.querySelector('.test-r2');
    probe = document.querySelector('.probe-r1');
    cmu = document.querySelector('.cmu-r1');

    tstation.style.visibility = "hidden"
    tstation2.style.visibility = "hidden"
    probe.style.visibility = "hidden"
    cmu.style.visibility = "hidden"

    // // add arrow into the receiving class, make it visible
    chk_facility.addEventListener('change', (event) => {
        if (chk_facility.checked == true){
            tstation.style.visibility = "visible"
            // tstation.show()
        } else {
            chk_test.checked = false
            // Create a new 'change' event
            var event = new Event('change');
            // Dispatch it.
            chk_test.dispatchEvent(event);
            tstation.style.visibility = "hidden"
            // line_tstation.style.display = "none"
        }
    });

    // // add line connector
    chk_facility.addEventListener('change', (event) => {
        if (chk_facility.checked == true){
            $('.fac-r1').connections({
                to: '.test-r1 ',
              });
       
        } else {
            $('.fac-r1').connections({
                to: '.test-r1',
                css: { color: "lightcyan" }
              });
        }
    });

    // add for test station 2

    chk_facility.addEventListener('change', (event) => {
        if (chk_facility.checked == true){
            tstation2.style.visibility = "visible"
            // tstation.show()
        } else {
            chk_test.checked = false
            // Create a new 'change' event
            var event = new Event('change');
            // Dispatch it.
            chk_test.dispatchEvent(event);
            tstation2.style.visibility = "hidden"
        }
    });

    chk_facility.addEventListener('change', (event) => {
        if (chk_facility.checked == true){
            $('.fac-r1').connections({
                to: '.test-r2',
              });
       
        } else {
            $('.fac-r1').connections({
                to: '.test-r2',
                css: { color: "lightcyan" },
                
              });
        }
    });


    chk_test.addEventListener('change', (event) => {
        probe = document.querySelector('.probe-r1');
        if (chk_test.checked == true){
            probe.style.visibility = "visible"
            // probe.show()

        } else {
            chk_probe.checked = false
            // Create a new 'change' event
            var event = new Event('change');
            // Dispatch it.
            chk_probe.dispatchEvent(event);
            probe.style.visibility = "hidden"
        }
    });

  //add line connector
  chk_test.addEventListener('change', (event) => {
    if (chk_test.checked == true){
        $('.test-r1').connections({
            to: '.probe-r1',
            css: { visibility: "visible" },
          });
   
    } else {
        $('.test-r1').connections({
            to: '.probe-r1',
            css: { color: "lightcyan" }
          });
    }
});

    chk_probe.addEventListener('change', (event) => {
        if (chk_probe.checked == true){
            cmu.style.visibility = "visible"
            // cmu.show()

        } else {
            chk_cmu.checked = false
            // make onchange listener run inside addEventListener
            // Create a new 'change' event
            var event = new Event('change');
            // Dispatch it.
            chk_cmu.dispatchEvent(event);

            cmu.style.visibility = "hidden"
        }
    });

    chk_probe.addEventListener('change', (event) => {
        if (chk_probe.checked == true){
            $('.probe-r1').connections({
                to: '.cmu-r1',
                css: { visibility: "visible" },
              });
       
        } else {
            $('.probe-r1').connections({
                to: '.cmu-r1',
                css: { color: "lightcyan" }
              });
        }
    });
    // search: run the onchange listener js

    // probe pop up
    chk_probe_pop.addEventListener('change', (event) => {
        if (chk_probe_pop.checked == true){
            cmu.style.visibility = "visible"
            // cmu.show()
    
        } else {
            chk_cmu.checked = false
            // make onchange listener run inside addEventListener
            // Create a new 'change' event
            var event = new Event('change');
            // Dispatch it.
            chk_cmu.dispatchEvent(event);
    
            cmu.style.visibility = "hidden"
        }
    });
    
    chk_probe_pop.addEventListener('change', (event) => {
        if (chk_probe_pop.checked == true){
            $('.probe-dropdown-container.probe').connections({
                to: '.cmu-r1',
                // css: { visibility: "visible" },
              });
       
        } else {
            $('.probe-dropdown-container.probe').connections({
                to: '.cmu-r1',
                css: { color: "lightcyan" }
              });
        }
    });
});


// Probe popup
var clone_probe_drop = $('.probe-r1').html();

$(document).on("click", ".dropdown-arrow.probe", function() {
        document.querySelector(".probe-dropdown-container").style.visibility="visible"
        // $(".probe-dropdown-container.probe").show()
        $(".probe-r1").replaceWith($(".probe-dropdown-container.probe"));
        $(".probe-dropdown-container.probe").css({'margin-right': '40px'});
        $('.test-r1').connections({
            to: '.probe-dropdown-container.probe',
            css: { visibility: "visible" },
          });
         
          $('.probe-dropdown-container.probe').connections({
            to: '.cmu-r1',
            css: { visibility: "visible" }})
    
})


$(document).on("click", ".dropdown-arrow.probe-pop", function() {
    // var clone = '<div class="box-text">Probe <input type="checkbox" id="probe-r1-input"></div> <div class="dropdown-arrow probe"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13L16 7.33198L14.59 6L10 10.3266L5.41 6L4 7.33198L10 13Z" fill="#E6E7F2"></path></svg></div>'
    var clone = $('.probe-r1').html()
    $('.probe-dropdown-container.probe').replaceWith(clone)
})


// Drop down CMU
$(document).on("click", ".dropdown-arrow.cmu", function() {
    document.querySelector(".cmu-dropdown-container.cmu").style.visibility="visible"
    // $(".probe-dropdown-container.probe").show()
    $(".cmu-r1").replaceWith($(".cmu-dropdown-container.cmu"));
    // $(".cmu-dropdown-container").css({'margin-right': '40px'});
    // $('.test-r1').connections({
    //     to: '.probe-dropdown-container.probe',
    //     css: { visibility: "visible" },
    //   });
     
    //   $('.probe-dropdown-container.probe').connections({
    //     to: '.cmu-r1',
    //     css: { visibility: "visible" }})

})

$(document).on("click", ".dropdown-arrow.cmu-pop", function() {
// var clone = '<div class="box-text">Probe <input type="checkbox" id="probe-r1-input"></div> <div class="dropdown-arrow probe"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13L16 7.33198L14.59 6L10 10.3266L5.41 6L4 7.33198L10 13Z" fill="#E6E7F2"></path></svg></div>'
var clone = $('.cmu-r1').html()
$('.cmu-dropdown-container').replaceWith(clone)
})

// Drop down visualization
$(document).on("click", ".add-button", function() {
    document.querySelector(".visualization-container").style.visibility="visible"
    document.querySelector(".pop-up-overlay").style.display="block"
    document.querySelector(".absolute-container").style.display="block"
})

$(document).on("click", "#close", function() {
    document.querySelector(".visualization-container").style.visibility="hidden"
    document.querySelector(".pop-up-overlay").style.display="none"
    document.querySelector(".absolute-container").style.display="none"
})



//------------Analytics page
// Experiment - Tags - Variables
    // Change color when clicking exp selects
$(document).ready(function() {
    var arr = $.makeArray($('.white-box.exp').children())
    $.map(arr, function(i) {
        $(i).on('click', function(){
            $(this).toggleClass('data-active')
        })
    })
})

    // Change color when clicking variable selects
    $(document).ready(function() {
        var arr = $.makeArray($('.white-box.vars').children())
        $.map(arr, function(i) {
            $(i).on('click', function(){
                $(this).toggleClass('data-active')
            })
        })
    })


// Analysis Tools
$(document).ready(function() {
    var arr = $.makeArray($('.analysis-tools').children())
    //map to iterate through each tag in arr
    $.map(arr, function(e){
        $(e).on('click', function(){
            $(this).toggleClass('analysis-active')
        })
    })
})

//- Add Event pop-up

$(document).ready(function(){
    //- Add Event pop-up
    $('#viz-add-event-btn').on('click', function(){
        console.log('hi')
        $('.analytics-plot-container').css({"visibility":"visible"});
      
    })

    // Analytics plot disappear
    $(document).on('click', '#analytics-close', function(e) {
        $('.analytics-plot-container').css({"visibility":"hidden"}); 
    })

})

// Plotting Data (+) button
$(document).ready(function() {
var i = 0
var j = 0
$('.add-page-button.plot').on("click", duplicate)
function duplicate() {
    // clone the whole div
    var original = document.getElementById('wrapping' + i)
    var clone = original.cloneNode(true)
    clone.id = "wrapping"+ ++i
    // fixed bc "absolute" makes overflow
    original.style.position="fixed"
    original.style.visibility ="hidden"
    original.parentNode.appendChild(clone)

    // clone Plotting Data tab
    var tab_original = document.getElementById('tab-plot'+j)
    var tab_clone = tab_original.cloneNode(true)
    tab_clone.id = "tab-plot"+ ++j
    tab_original.append(tab_clone)

    //map to iterate through each tag in arr
    var arr = $.makeArray($('.analysis-tools').children())
    $.map(arr, function(i){
        $(i).on('click', function(){
            $(this).toggleClass('analysis-active')
        })
    })

    // Change color when clicking exp selects
    var arrExp = $.makeArray($('.white-box.exp').children())
    $.map(arrExp, function(e) {
        $(e).on('click', function(){
            $(this).toggleClass('data-active')
        }) 
    })

    // Change color when clicking variable selects
    var arrVar = $.makeArray($('.white-box.vars').children())
    $.map(arrVar, function(e) {
        $(e).on('click', function(){
            $(this).toggleClass('data-active')
        })
    })

console.log("i",i)
console.log("j", j)
}

    // Click X to close tab
    $('#tab-plot' + j).on('click', function(){
        // var original = document.getElementById('wrapping' + i)
        console.log("i",i)
        console.log("i",j)
        $('#wrapping' +i).remove()
        $('#tab-plot' +j).remove()
        // document.getElementById('wrapping'+i).style.visibility ="hidden"
        // document.getElementById('tab-plot'+i).style.visibility ="hidden"
        j = j-1
        i = i-1

        document.getElementById('wrapping'+ i).style.visibility ="visible"
        document.getElementById('wrapping'+ i).style.position="relative"   

        console.log("i",i)
        console.log("j",j)
    })
})



//---- Analysis (+) button
$(document).ready(function() {
    var m = 0
    var n = 0
    $('.add-page-button.analysis').on("click", duplicateAll)
    function duplicateAll() {
        // clone the whole content
        var original = document.getElementById('main-wrap' + m)
        var clone = original.cloneNode(true)
        clone.id = "main-wrap"+ ++m
        // fixed bc "absolute" makes overflow
        original.style.position="fixed"
        original.style.visibility ="hidden"
        original.parentNode.appendChild(clone)
    
        // clone Analysis title tab
        var tab_original = document.getElementById('title-tab'+n)
        var tab_clone = tab_original.cloneNode(true)
        tab_clone.id = "title-tab"+ ++n 
        k = n
        tab_clone.children[0].innerHTML = 'Analysis ' + ++k + '<div class="delete-tab">X</div>'
        tab_original.append(tab_clone)
    
        //map to iterate through each tag in arr
        var arr = $.makeArray($('.analysis-tools').children())
        $.map(arr, function(i){
            $(i).on('click', function(){
                $(this).toggleClass('analysis-active')
            })
        })

        // Change color when clicking exp selects
        var arrExp = $.makeArray($('.white-box.exp').children())
        $.map(arrExp, function(e) {
            $(e).on('click', function(){
                $(this).toggleClass('data-active')
            }) 
        })

        // Change color when clicking variable selects
        var arrVar = $.makeArray($('.white-box.vars').children())
        $.map(arrVar, function(e) {
            $(e).on('click', function(){
                $(this).toggleClass('data-active')
            })
        })
        
        $(document).on('click', '#viz-add-event-btn', function(){
            console.log('hiii')
            $('.analytics-plot-container').css({"visibility":"visible"}); 
        })
    
        // Analytics plot disappear
        $(document).on('click', '#analytics-close', function(e) { 
            $('.analytics-plot-container').css({"visibility":"hidden"}); 
        })
    console.log("m",m)
    console.log("n", n)
    }
    
    // Click X to close tab
    $('#title-tab' + n).on('click', function(){
        // var original = document.getElementById('wrapping' + i)
        $('#main-wrap' +m).remove()
        $('#title-tab' +n).remove()
        // document.getElementById('wrapping'+i).style.visibility ="hidden"
        // document.getElementById('tab-plot'+i).style.visibility ="hidden"
        m = m-1
        n = n-1
    
        document.getElementById('main-wrap'+ m).style.visibility ="visible"
        document.getElementById('main-wrap'+ m).style.position="relative"   
     
        console.log("m",m)
        console.log("n",n)
    
        var arr = $.makeArray($('.analysis-tools').children())
        //map to iterate through each tag in arr
        $.map(arr, function(i){
            $(i).on('click', function(){
                $(this).addClass('analysis-active')
            })
        })
    })
})


//  -- Saved Analytics Page
$(document).ready(function(){
    $(document).on('click', '.trash-data.analytics', function (e) {
        $(this).parent().parent().parent().remove();
    })
})

// -------Data page and Saved Analytics Page

$(document).ready(function(){
    // Delete when click trash icon
    $(document).on('click', '#trash-data', function (e) {
        $(this).parent().parent().remove();
    })

    $(document).on('click', '.duplicate-data-row', duplicateRowData)

    // Upload button
    $(document).on('click', '.upload-button.data', function (e) {
        $('.data-upload-container').css({'display':'block'});
    })
    $(document).on('click', '.close.upload', function (e) {
        $('.data-upload-container').css({'display':'none'});
    })

    // Choose a file pop up
    $(document).on('click', '#choose-a-file', function (e) {
        $('.data-upload-input').css({'display':'block'});
    })
    $(document).on('click', '.close.upload-input', function (e) {
        $('.data-upload-input').css({'display':'none'});
    })

})

// duplicate without IDs
function duplicateRowData() {
    var dupRow = this.closest('.row-data-scroll').cloneNode(true)
    dupRow.id = ""
    // dupRow.onclick = duplicateRow 
    // find the right container so it's appended below
    this.closest('.row-data-scroll').parentNode.appendChild(dupRow)
}

// ---- Events page
$(document).ready(function(){
    // Close tab
    $(document).on('click', '.dismiss', function (e) {
        $('.dismiss').parent().parent().remove();
    });     

    // Open a new tab
    $(document).on('click', '.export-data', function (e) {
    // open a pseudo-website atm
        window.open('https://www.google.com/', 'name');
    })
    
    $(document).on('click', '.export', function (e) {
        // open a pseudo-website atm
        window.open('https://www.google.com/', 'name');
    });

    // Duplicate without IDs
    $(document).on('click', '.duplicate-event', duplicateEvent)

    // Delete trash icon
    $(document).on('click', '.trash-data', function (e) {
        $(this).parent().parent().remove();
    })
})

function duplicateEvent() {
    var dupRow = this.closest('.row-event').cloneNode(true)
    dupRow.id = ""
    // find the right container so it's appended below
    this.closest('.row-event').parentNode.appendChild(dupRow)
}

// --- Facilities page

$(document).ready(function() {
    // close pop-up
    $(document).on('click', '.close.faci', function(){
        $('.facilities-pop-up').css({'display':'none'})
        })
    // Make corresponding pop-up appear on tab select
    $(document).on("click", ".tab.current-ctrl", function(){
        $('.current-controls-container').css({'visibility':'visible'});
        $('.controls-history-container').css({'visibility':'hidden'});
        $('.alerts-container').css({'visibility':'hidden'});
        $('.maintenance-reset-container').css({'visibility':'hidden'});
        $('.facilities-pop-up').css({'width':'45%', 'height':'inherit'})

    })

    $(document).on("click", ".tab.ctrl-hist", function(){
        $('.current-controls-container').css({'visibility':'hidden'});
        $('.controls-history-container').css({'visibility':'visible'});
        $('.alerts-container').css({'visibility':'hidden'});
        $('.maintenance-reset-container').css({'visibility':'hidden'});
        $('.facilities-pop-up').css({'width':'60%', 'height':'inherit'})
    })

    $(document).on("click", ".tab.alerts", function(){
        $('.current-controls-container').css({'visibility':'hidden'});
        $('.controls-history-container').css({'visibility':'hidden'});
        $('.alerts-container').css({'visibility':'visible'});
        $('.maintenance-reset-container').css({'visibility':'hidden'});
        $('.facilities-pop-up').css({'width':'50%', 'height':'inherit'})

    })

    $(document).on("click", ".tab.maintain", function(){
        $('.current-controls-container').css({'visibility':'hidden'});
        $('.controls-history-container').css({'visibility':'hidden'});
        $('.alerts-container').css({'visibility':'hidden'});
        $('.maintenance-reset-container').css({'visibility':'visible'});
        $('.facilities-pop-up').css({'width':'50%', 'height':'inherit'})
    

    })

    // Duplicate table row in Controls History tab
    $(document).on('click', '.duplicate-btn', duplicateRow)
})

// duplicate without IDs
function duplicateRow() {
    var dupRow = this.closest('.row-ctrl-hst').cloneNode(true)
    dupRow.id = ""
    dupRow.onclick = duplicateRow 
    // find the right container so it's appended below
    this.closest('.row-ctrl-hst').parentNode.appendChild(dupRow)
}

// -- Dashboard page
//- Open experiment in a new tab - placeholder JS

// replace Google.com with relevant pop-up later
$(document).on('click', '.dash-exp-export', function (e) {
    // open a pseudo-website atm
    window.open('https://www.google.com/', 'name')
    })

//--- Tag Page
$(document).ready(function(){

    // Delete with pop-up
    $(document).on('click', '.tag-delete-icon', function(){
        $('.delete-tag-container').css({'display':'block'})
    })

    $(document).on('click', '.start-button', function(){
        $('.delete-tag-container').css({'display':'none'})
    })

    $(document).on('click', '.delete-button', function(){
        $('.tag-delete-icon').closest('tr').remove()
        $('.delete-tag-container').css({'display':'none'})
    })

    // Edit with popup
    $(document).on('click', '.tag-edit-icon', function(){
        $('.create-tag-container').css({'display':'block'})
    })

    $(document).on('click', '[id="close tag"]', function(){
        $('.create-tag-container').css({'display':'none'})
    })
})

