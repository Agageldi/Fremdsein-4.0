$(function() {

  // function to create slider ticks
  var setSliderTicks = function() {
    // slider element
    var $slider = $('.slider');
    var max = $slider.slider("option", "max");
    var min = $slider.slider("option", "min");
    var step = $slider.slider("option", "step");
    var spacing = 100 / (max - min);
    // tick element
    var ticks = $slider.find('div.ticks');

    // remove all ticks if they exist
    $slider.find('.ui-slider-tick-mark-main').remove();
    $slider.find('.ui-slider-tick-mark-text').remove();
    $slider.find('.ui-slider-tick-mark-side').remove();

    // generate ticks          
    for (var i = min; i <= max; i = i + step) {

      // main ticks (whole number)
      if (i % 1 === 0) {
        $('<span class="ui-slider-tick-mark-main"></span>').css('left', (spacing * i) + '%').appendTo(ticks);
        $('<span class="ui-slider-tick-mark-text">' + i + '</span>').css('left', (spacing * i) + '%').appendTo(ticks);
      }
      // side ticks
      else {
        $('<span class="ui-slider-tick-mark-side"></span>').css('left', (spacing * i) + '%').appendTo(ticks);
      }
    }
  };

  // create slider  
  $('#slider1').slider({
    // set min and maximum values
    // day hours in this example
    min: 0,
    max: 100,
    // step
    // quarter of an hour in this example
    step: 1,
    // range
    range: false,
    // show tooltips
    tooltips: true,
    // current data
    handles: [{
      value: foodHandler[0],
      type: "start"
    }, {
      value: foodHandler[1],
      type: "wake"
    }, {
      value: foodHandler[2],
      type: "leave"
    }, {
      value: foodHandler[3],
      type: "return"
    }, {
      value: foodHandler[4],
      type: "sleep"
    }],
    // display type names
    showTypeNames: true,
    typeNames: {
	  'start': '0',
      'wake': '1',
      'leave': '2',
      'return': '3',
      'sleep': '4'
    },
    // main css class (of unset data)
    mainClass: 'sleep',
    // slide callback
    slide: function(e, ui) {
      console.log(e, ui);
    },
    // handle clicked callback
    handleActivated: function(event, handle) {
      // get select element
      var select = $(this).parent().find('.slider-controller select');
      // set selected option
      select.val(handle.type);
    }

  });

  // button for adding new ranges                        
  $('.slider-controller button.add').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider1');
      // trigger addHandle event
      $slider.slider('addHandle', {
        value: 12,
        type: $('.slider-controller select').val()
      });
      return false;
    });

  // button for removing currently selected handle
  $('.slider-controller button.remove').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider1');
      // trigger removeHandle event on active handle
      $slider.slider('removeHandle', $slider.find('a.ui-state-active').attr('data-id'));

      return false;
    });

  // when clicking on handler
  $(document).on('click', '.slider a', function() {
    var select = $('.slider-controller select');
    // enable if disabled
    //select.attr('disabled', false);
    //alert($(this).attr('data-type'));
    select.val($(this).attr('data-type'));
    /*if ($(this).parent().find('a.ui-state-active').length)
      $(this).toggleClass('ui-state-active');*/
  });
});






  $('#slider2').slider({
    // set min and maximum values
    // day hours in this example
    min: 0,
    max: 100,
    // step
    // quarter of an hour in this example
    step: 1,
    // range
    range: false,
    // show tooltips
    tooltips: true,
    // current data
    handles: [{
      value: freedomHandler[0],
      type: "start"
    }, {
      value: freedomHandler[1],
      type: "wake"
    }, {
      value: freedomHandler[2],
      type: "leave"
    }, {
      value: freedomHandler[3],
      type: "return"
    }, {
      value: freedomHandler[4],
      type: "sleep"
    }],
    // display type names
    showTypeNames: true,
    typeNames: {
	  'start': '0',
      'wake': '1',
      'leave': '2',
      'return': '3',
      'sleep': '4'
    },
    // main css class (of unset data)
    mainClass: 'sleep',
    // slide callback
    slide: function(e, ui) {
      console.log(e, ui);
    },
    // handle clicked callback
    handleActivated: function(event, handle) {
      // get select element
      var select = $(this).parent().find('.slider-controller select');
      // set selected option
      select.val(handle.type);
    }

  });

  // button for adding new ranges                        
  $('.slider-controller button.add').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider2');
      // trigger addHandle event
      $slider.slider('addHandle', {
        value: 12,
        type: $('.slider-controller select').val()
      });
      return false;
    });

  // button for removing currently selected handle
  $('.slider-controller button.remove').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider2');
      // trigger removeHandle event on active handle
      $slider.slider('removeHandle', $slider.find('a.ui-state-active').attr('data-id'));

      return false;
    });

  // when clicking on handler
  $(document).on('click', '.slider a', function() {
    var select = $('.slider-controller select');
    // enable if disabled
    //select.attr('disabled', false);
    //alert($(this).attr('data-type'));
    select.val($(this).attr('data-type'));
    /*if ($(this).parent().find('a.ui-state-active').length)
      $(this).toggleClass('ui-state-active');*/
  });







/*

  $('#slider3').slider({
    // set min and maximum values
    // day hours in this example
    min: 0,
    max: 100,
    // step
    // quarter of an hour in this example
    step: 1,
    // range
    range: false,
    // show tooltips
    tooltips: true,
    // current data
    handles: [{
      value: ftopicHandler[0],
      type: "start"
    }, {
      value: ftopicHandler[1],
      type: "wake"
    }, {
      value: ftopicHandler[2],
      type: "leave"
    }, {
      value: ftopicHandler[3],
      type: "return"
    }, {
      value: ftopicHandler[4],
      type: "sleep"
    }],
    // display type names
    showTypeNames: true,
    typeNames: {
	  'start': '0',
      'wake': '1',
      'leave': '2',
      'return': '3',
      'sleep': '4'
    },
    // main css class (of unset data)
    mainClass: 'sleep',
    // slide callback
    slide: function(e, ui) {
      console.log(e, ui);
    },
    // handle clicked callback
    handleActivated: function(event, handle) {
      // get select element
      var select = $(this).parent().find('.slider-controller select');
      // set selected option
      select.val(handle.type);
    }

  });

  // button for adding new ranges                        
  $('.slider-controller button.add').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider3');
      // trigger addHandle event
      $slider.slider('addHandle', {
        value: 12,
        type: $('.slider-controller select').val()
      });
      return false;
    });

  // button for removing currently selected handle
  $('.slider-controller button.remove').click(function(e) {
      e.preventDefault();
      // get slider
      var $slider = $('#slider3');
      // trigger removeHandle event on active handle
      $slider.slider('removeHandle', $slider.find('a.ui-state-active').attr('data-id'));

      return false;
    });

  // when clicking on handler
  $(document).on('click', '.slider a', function() {
    var select = $('.slider-controller select');
    // enable if disabled
    //select.attr('disabled', false);
    //alert($(this).attr('data-type'));
    select.val($(this).attr('data-type'));
    /*if ($(this).parent().find('a.ui-state-active').length)
      $(this).toggleClass('ui-state-active');*/
//  });
