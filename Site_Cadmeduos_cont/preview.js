$(document).ready(	
	function() {
		var $container = $(".container");
		$container.wtRotator({
			width:590,
			height:220,
			button_width:24,
			button_height:24,
			button_margin:5,
			auto_start:true,
			delay:6000,
			transition:"diag.fade",
			transition_speed:800,
			block_size:75,
			vert_size:55,
			horz_size:50,
			cpanel_align:"BR",
			timer_align:"top",
			display_thumbs:true,
			display_dbuttons:false,
			display_playbutton:false,
			tooltip_type:"none",
			display_numbers:true,
			display_timer:false,
			mouseover_pause:false,
			cpanel_mouseover:true,
			text_mouseover:false,
			text_effect:"fade",
			text_sync:true,
			shuffle:false,
			block_delay:25,
			vstripe_delay:73,
			hstripe_delay:183
		});
		
		var $submitButton = $("#submit-btn");
		var $resetButton =  $("#reset-btn");
		var $trans = 		$("#transitions");
		var $easings =		$("#easing");
		var $textEffects = 	$("#texteffects");
		var $cpAlign = 		$("#cpalignments");
		var $cpPos = 		$("input[name='cp-pos']");
		var $cpanelCB = 	$("#cpanel-cb");
		var $ttType = 		$("#tt-type");
		var $thumbCB = 		$("#thumbs-cb");
		var $dBtnsCB = 		$("#dbuttons-cb");
		var $playBtnCB = 	$("#playbutton-cb");
		var $timerCB = 		$("#timer-cb");
		var $pauseCB = 		$("#pause-cb");
		var $textCB = 		$("#text-cb");
		
		$submitButton.click(function() {
			$container.undoChanges()
					  	.setTransition($trans.val()).setEasing($easings.val())
						.setTextEffect($textEffects.val())
						.setCpanelAlign($cpAlign.val())
						.setCpanelPos($cpPos.filter(":checked").val())
						.setTooltipType($ttType.val())
						.setThumbs($thumbCB.attr("checked"))
						.setDButtons($dBtnsCB.attr("checked"))
						.setPlayButton($playBtnCB.attr("checked"))
						.setTimerBar($timerCB.attr("checked"))
						.setMouseoverText($textCB.attr("checked"))
						.setMouseoverPause($pauseCB.attr("checked"))
						.setMouseoverCPanel($cpanelCB.attr("checked"))
						.updateChanges();	
		});
		
		$resetButton.click(function() {
			init();
			$submitButton.trigger("click");
		});
		
		$trans.change(
			function() {		
				$easings.attr("disabled", $(this).val() == "none"); 
			}
		);
		
		$cpPos.change(
			function() {		
				$cpanelCB.attr("disabled", $(this).filter(":checked").val() == "outside"); 
			}
		);
		
		$thumbCB.change(
			function() {
				$ttType.attr("disabled", !$(this).attr("checked")); 
				checkCPanel();	
			}
		);
		
		$dBtnsCB.change(function() { checkCPanel(); });
		$playBtnCB.change(function() { checkCPanel(); });			
		
		var init = function() {
			$trans.val("random");
			$easings.val("").attr("disabled", false);
			$textEffects.val("fade");
			$cpAlign.val("BR").attr("disabled", false);
			$cpPos.attr("disabled", false);
			$("input#pos-inside").attr("checked", true);
			$ttType.val("image").attr("disabled", false); 
			$thumbCB.attr("checked", "checked");
			$dBtnsCB.attr("checked", "checked");
			$playBtnCB.attr("checked", "checked");
			$timerCB.attr("checked", "checked");
			$pauseCB.attr("checked", "");
			$textCB.attr("checked", "");
			$cpanelCB.attr("checked", "").attr("disabled", false);
		}
		
		var checkCPanel = function() {
			var val = ($thumbCB.attr("checked") || $dBtnsCB.attr("checked") || $playBtnCB.attr("checked"));
			$cpanelCB.attr("disabled", !val || $cpPos.filter(":checked").val() == "outside");
			$cpPos.attr("disabled", !val);
			$cpAlign.attr("disabled", !val);
		}	
		
		init();
	}
);