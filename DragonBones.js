var dragonBones = dragonBones || {};

dragonBones.FT_FRAME = 0;
dragonBones.FT_TRANSFORM_FRAME = 1;

dragonBones.ANGLE_TO_RADIAN = Math.PI / 180;
dragonBones.RADIAN_TO_ANGLE = 180 / Math.PI;

dragonBones.AUTO_TWEEN_EASING = 10;
dragonBones.NO_TWEEN_EASING = 20;
dragonBones.USE_FRAME_TWEEN_EASING = 30;

var DBConstValues = {
		DRAGON_BONES:"dragonBones",
		ARMATURE:"armature",
		SKIN:"skin",
		BONE:"bone",
		SLOT:"slot",
		DISPLAY:"display",
		ANIMATION:"animation",
		TIMELINE:"timeline",
		FRAME:"frame",
		TRANSFORM:"transform",
		COLOR_TRANSFORM:"colorTransform",
		RECTANGLE:"rectangle",
		ELLIPSE:"ellipse",
		TEXT:"text",
		COLOR:"color",
		SCALING_GRID:"scalingGrid",

		TEXTURE_ATLAS:"TextureAtlas",
		SUB_TEXTURE:"SubTexture",

		A_ROTATED:"rotated",
		A_FRAME_X:"frameX",
		A_FRAME_Y:"frameY",
		A_FRAME_WIDTH:"frameWidth",
		A_FRAME_HEIGHT:"frameHeight",

		A_VERSION:"version",
		A_IMAGE_PATH:"imagePath",
		A_FRAME_RATE:"frameRate",
		A_NAME:"name",
		A_PARENT:"parent",
		A_LENGTH:"length",
		A_TYPE:"type",
		A_FADE_IN_TIME:"fadeInTime",
		A_DURATION:"duration",
		A_SCALE:"scale",
		A_OFFSET:"offset",
		A_LOOP:"loop",
		A_EVENT:"event",
		A_EVENT_PARAMETERS:"eventParameters",
		A_SOUND:"sound",
		A_ACTION:"action",
		A_HIDE:"hide",
		A_AUTO_TWEEN:"autoTween",
		A_TWEEN_EASING:"tweenEasing",
		A_TWEEN_ROTATE:"tweenRotate",
		A_TWEEN_SCALE:"tweenScale",
		A_DISPLAY_INDEX:"displayIndex",
		A_Z_ORDER:"z",
		A_BLENDMODE:"blendMode",
		A_WIDTH:"width",
		A_HEIGHT:"height",
		A_INHERIT_ROTATION:"inheritRotation",
		A_INHERIT_SCALE:"inheritScale",
		A_X:"x",
		A_Y:"y",
		A_SKEW_X:"skX",
		A_SKEW_Y:"skY",
		A_SCALE_X:"scX",
		A_SCALE_Y:"scY",
		A_PIVOT_X:"pX",
		A_PIVOT_Y:"pY",
		A_ALPHA_OFFSET:"aO",
		A_RED_OFFSET:"rO",
		A_GREEN_OFFSET:"gO",
		A_BLUE_OFFSET:"bO",
		A_ALPHA_MULTIPLIER:"aM",
		A_RED_MULTIPLIER:"rM",
		A_GREEN_MULTIPLIER:"gM",
		A_BLUE_MULTIPLIER:"bM",

		A_ALPHA:"a",
		A_RED:"r",
		A_GREEN:"g",
		A_BLUE:"b",

		A_LEFT:"left",
		A_RIGHT:"right",
		A_TOP:"top",
		A_BOTTOM:"bottom",

		A_BOLD:"bold",
		A_ITALIC:"italic",
		A_SIZE:"size",
		A_FACE:"face",
		A_ALIGN_H:"alignH",
		A_ALIGN_V:"alignV",
		A_LINE_TYPE:"lineType",
		A_TEXT_TYPE:"textType",
		A_TEXT:"text",

		A_SCALE_X_OFFSET:"scXOffset",
		A_SCALE_Y_OFFSET:"scYOffset"
};

dragonBones.AutoSearchType = {
		AST_ALL:0,
		AST_AUTO:1,
		AST_NONE:2
},

dragonBones.BlendMode = {
		BM_ADD:0,
		BM_ALPHA:1,
		BM_DARKEN:2,
		BM_DIFFERENCE:3,
		BM_ERASE:4,
		BM_HARDLIGHT:5,
		BM_INVERT:6,
		BM_LAYER:7,
		BM_LIGHTEN:8,
		BM_MULTIPLY:9,
		BM_NORMAL:10,
		BM_OVERLAY:11,
		BM_SCREEN:12,
		BM_SHADER:13,
		BM_SUBTRACT:14
};

dragonBones.getBlendModeByString = function(blendMode)
{
	if (blendMode == "normal")
	{
		return dragonBones.BlendMode.BM_NORMAL;
	}
	else if (blendMode == "add")
	{
		return dragonBones.BlendMode.BM_ADD;
	}
	else if (blendMode == "alpha")
	{
		return dragonBones.BlendMode.BM_ALPHA;
	}
	else if (blendMode == "darken")
	{
		return dragonBones.BlendMode.BM_DARKEN;
	}
	else if (blendMode == "difference")
	{
		return dragonBones.BlendMode.BM_DIFFERENCE;
	}
	else if (blendMode == "erase")
	{
		return dragonBones.BlendMode.BM_ERASE;
	}
	else if (blendMode == "hardLight")
	{
		return dragonBones.BlendMode.BM_HARDLIGHT;
	}
	else if (blendMode == "invert")
	{
		return dragonBones.BlendMode.BM_INVERT;
	}
	else if (blendMode == "layer")
	{
		return dragonBones.BlendMode.BM_LAYER;
	}
	else if (blendMode == "lighten")
	{
		return dragonBones.BlendMode.BM_LIGHTEN;
	}
	else if (blendMode == "multiply")
	{
		return dragonBones.BlendMode.BM_MULTIPLY;
	}
	else if (blendMode == "overlay")
	{
		return dragonBones.BlendMode.BM_OVERLAY;
	}
	else if (blendMode == "screen")
	{
		return dragonBones.BlendMode.BM_SCREEN;
	}
	else if (blendMode == "shader")
	{
		return dragonBones.BlendMode.BM_SHADER;
	}
	else if (blendMode == "subtract")
	{
		return dragonBones.BlendMode.BM_SUBTRACT;
	}
	return dragonBones.BlendMode.BM_NORMAL;
}

dragonBones.DisplayType = {
		DT_IMAGE:0,
		DT_ARMATURE:1,
		DT_FRAME:2,
		DT_TEXT:3,
		DT_1:4,
		DT_2:5,
		DT_3:6,
		DT_4:7,
		DT_5:8
};

dragonBones.getDisplayTypeByString = function(displayType)
{
	if (displayType == "image")
	{
		return dragonBones.DisplayType.DT_IMAGE;
	}
	else if (displayType == "armature")
	{
		return dragonBones.DisplayType.DT_ARMATURE;
	}
	else if (displayType == "frame")
	{
		return dragonBones.DisplayType.DT_FRAME;
	}
	else if (displayType == "text")
	{
		return dragonBones.DisplayType.DT_TEXT;
	}

	return dragonBones.DisplayType.DT_IMAGE;
}

dragonBones.AnimationFadeOutMode = {
		NONE:0,
		SAME_LAYER:1,
		SAME_GROUP:2,
		SAME_LAYER_AND_GROUP:3,
		ALL:4
};

dragonBones.FadeState = {
		FADE_BEFORE:0,
		FADING:1,
		FADE_COMPLETE:2
};

dragonBones.UpdateState = {
		UPDATE:0,
		UPDATE_ONCE:1,
		UNUPDATE:2
};

dragonBones.EventType = {
		Z_ORDER_UPDATED:0,
		ANIMATION_FRAME_EVENT:1,
		BONE_FRAME_EVENT:2,
		SOUND:3,
		FADE_IN:4,
		FADE_OUT:5, 
		START:6, 
		COMPLETE:7, 
		LOOP_COMPLETE:8, 
		FADE_IN_COMPLETE:9, 
		FADE_OUT_COMPLETE:10,
		_ERROR:11
};

/*----------------------------------------------------------------------animation部分---------------------------------------------------------------*/
dragonBones.WorldClock = cc.Class.extend({
	_dirty:false,
	_isPlaying:false,
	_time:0,
	_timeScale:0,
	_animatableList:null,

	ctor:function(timeScale){
		if(timeScale === undefined) timeScale = 1;
		this._animatableList = [];
		this._isPlaying = true;
		this._time = 0;
		this.setTimeScale(timeScale);
	},

	getTime:function(){
		return this._time;
	},

	getTimeScale:function(){
		return this._timeScale;
	},

	setTimeScale:function(timeScale){
		if (timeScale < 0 || timeScale != this._timeScale) timeScale = 1;
		this._timeScale = timeScale;
	},

	dispose:function(){
		this._animatableList.length = 0;
	},

	contains:function(animatable){
		return this._animatableList.indexOf(animatable) >= 0;
	},

	add:function(animatable){
		if(animatable != null && this._animatableList.indexOf(animatable) == -1){
			this._animatableList.push(animatable);
		}
	},

	remove:function(animatable){
		var index = this._animatableList.indexOf(animatable);
		if(index >= 0){
			this._animatableList[index] = null;
			this._dirty = true;
		}
	},

	removeAll:function(){
		this._animatableList.length = 0;
	},

	play:function(){
		this._isPlaying = true;
	},

	stop:function(){
		this._isPlaying = false;
	},

	advanceTime:function(passedTime){
		if (!this._isPlaying){
			return;
		}

		if (passedTime < 0){
			passedTime = 0;
		}

		passedTime *= this._timeScale;
		this._time += passedTime;

		var len = this._animatableList.length;
		if(len == 0){
			return;
		}

		var animatable;
		var i;
		for(i = 0; i < len; i++){
			animatable = this._animatableList[i];
			if(animatable != null){
				animatable.advanceTime(passedTime);
			}
		}

		if(this._dirty){
			var curIdx = 0;
			len = this._animatableList.length;
			for (i = 0; i < len; i++)
			{
				animatable = this._animatableList[i];
				if (animatable != null)
				{
					if (curIdx != i)
					{
						this._animatableList[curIdx] = animatable;
						this._animatableList[i] = null;
					}
					curIdx++;
				}
			}
			this._animatableList.length = curIdx;
			this._dirty = false;
		}
	}
});

dragonBones.WorldClock._instance = null;
dragonBones.WorldClock.getInstance = function(){
	if(dragonBones.WorldClock._instance == null){
		dragonBones.WorldClock._instance = new dragonBones.WorldClock();
	}
	return dragonBones.WorldClock._instance;
};

dragonBones.Animation = cc.Class.extend({
	autoTween:false,

	_isFading:false,
	_isPlaying:false,
	_timeScale:0,

	_animationList:null,
	_animationDataList:null,
	_animationStateList:null,

	_armature:null,
	_lastAnimationState:null,

	ctor:function(){
		this.autoTween = true;
		this._timeScale = 1;

		this._animationList = [];
		this._animationDataList = [];
		this._animationStateList = [];
	},

	getIsPlaying:function(){
		return this._isPlaying && !this.getIsComplete();
	},

	getIsComplete:function(){
		if (this._lastAnimationState){
			if (!this._lastAnimationState._isComplete){
				return false;
			}

			var l = this._animationStateList.length;
			for (var i = 0; i < l; i++){
				if (!this._animationStateList[i]._isComplete){
					return false;
				}
			}
			return true;
		}
		return true;
	},

	getAnimationList:function(){
		return this._animationList;
	},

	getLastAnimationState:function(){
		return this._lastAnimationState;
	},

	getTimeScale:function(){
		return this._timeScale;
	},

	setTimeScale:function(timeScale){
		if (timeScale < 0) {
			timeScale = 1;
		}
		this._timeScale = timeScale;
	},

	getAnimationDataList:function(){
		return this._animationDataList;
	},

	setAnimationDataList:function(animationDataList){
		this._animationDataList = animationDataList;
		this._animationList.length = 0;

		var l = this._animationDataList.length;
		for (var i = 0; i < l; i++){
			this._animationList.push(this._animationDataList[i].name);
		}
	},

	dispose:function(){
		this._animationDataList.length = 0;

		var l = this._animationStateList.length;
		for (var i = 0; i < l; i++){
			dragonBones.AnimationState.returnObject(this._animationStateList[i]);
		}

		this._animationStateList.length = 0;
		this._armature = null;
		this._lastAnimationState = null;
	},

	clear:function(){
		this.stop();

		var l = this._animationStateList.length;
		var i;
		for (i = 0; i < l; i++){
			dragonBones.AnimationState.returnObject(this._animationStateList[i]);
		}
		this._animationStateList.length = 0;
		this._lastAnimationState = null;

		l = this._armature._slotList.length;
		var childArmature;
		for (i = 0; i < l; i++){
			childArmature = this._armature._slotList[i].getChildArmature();
			if (childArmature) {
				childArmature.getAnimation().clear();
			}
		}
	},

	gotoAndPlay:function(animationName, fadeInTime, duration, playTimes, layer, group, fadeOutMode, pauseFadeOut, pauseFadeIn){
		if (fadeInTime === undefined) { fadeInTime = -1; }
		if (duration === undefined) { duration = -1; }
		if (playTimes === undefined) { playTimes = -1; }
		if (layer === undefined) { layer = 0; }
		if (group === undefined) { group = null; }
		if (fadeOutMode === undefined) { fadeOutMode = dragonBones.AnimationFadeOutMode.SAME_LAYER_AND_GROUP; }
		if (pauseFadeOut === undefined) { pauseFadeOut = true; }
		if (pauseFadeIn === undefined) { pauseFadeIn = true; }

        if (!this._animationDataList) {
            return null;
        }
		var animationData;
		var i = this._animationDataList.length;
		while(--i >= 0){
			if (this._animationDataList[i].name == animationName){
				animationData = this._animationDataList[i];
				break;
			}
		}

		if (!animationData){
			return null;
		}

		this._isPlaying = true;
		this._isFading = true;

		fadeInTime = fadeInTime < 0 ? (animationData.fadeTime < 0 ? 0.3 : animationData.fadeTime) : fadeInTime;
		if (fadeInTime <= 0) {
			fadeInTime = 0.01;
		}

        var durationScale;
        if (duration < 0) {
            durationScale = animationData.scale < 0 ? 1 : animationData.scale;
        } else {
            durationScale = duration * 1000/ animationData.duration;
        }

		if (durationScale == 0) {
			durationScale = 0.001;
		}

		playTimes = playTimes < 0 ? animationData.playTimes : playTimes;

		var animationState;
		switch (fadeOutMode)
		{
		case dragonBones.AnimationFadeOutMode.NONE:
			break;
		case dragonBones.AnimationFadeOutMode.SAME_LAYER:
			i = this._animationStateList.length;
			while(--i >= 0){
				animationState = this._animationStateList[i];
				if(animationState._layer == layer){
					animationState.fadeOut(fadeInTime, pauseFadeOut);
				}
			}
			break;
		case dragonBones.AnimationFadeOutMode.SAME_GROUP:
			i = this._animationStateList.length;
			while(--i >= 0){
				animationState = this._animationStateList[i];
				if (animationState._group == group){
					animationState.fadeOut(fadeInTime, pauseFadeOut);
				}
			}
			break;
		case dragonBones.AnimationFadeOutMode.ALL:
			i = this._animationStateList.length;
			while(--i >= 0){
				animationState = this._animationStateList[i];
				animationState.fadeOut(fadeInTime, pauseFadeOut);
			}
			break;
		case dragonBones.AnimationFadeOutMode.SAME_LAYER_AND_GROUP:
		default:
			i = this._animationStateList.length;
		while(--i >= 0){
			animationState = this._animationStateList[i];
			if (animationState._layer == layer && animationState._group == group){
				animationState.fadeOut(fadeInTime, pauseFadeOut);
			}
		}
		break;
		}

		this._lastAnimationState = dragonBones.AnimationState.borrowObject();
		this._lastAnimationState._layer = layer;
		this._lastAnimationState._group = group;
		this._lastAnimationState.autoTween = this.autoTween;
		this._lastAnimationState.fadeIn(this._armature, animationData, fadeInTime, 1 / durationScale, playTimes, pauseFadeIn);
		this.addState(this._lastAnimationState);

        var slotList = this._armature.getSlots();
        var slot;
        var childArmature;
        i = slotList.length;
        while (i--) {
            slot = slotList[i];
            childArmature = slot.getChildArmature();
            if (childArmature&& childArmature._isInheritAnimation &&
                childArmature._animation.hasAnimation(animationName)) {
                childArmature._animation.gotoAndPlay(animationName, fadeInTime);
            }
        }


        return this._lastAnimationState;
	},

	gotoAndStop:function(animationName, time, normalizedTime, fadeInTime, duration, layer, group, fadeOutMode){
		if (normalizedTime === undefined) { normalizedTime = -1; }
		if (fadeInTime === undefined) { fadeInTime = 0; }
		if (duration === undefined) { duration = -1; }
		if (layer === undefined) { layer = 0; }
		if (group === undefined) { group = null; }
		if (fadeOutMode === undefined) { fadeOutMode = dragonBones.AnimationFadeOutMode.ALL; }

		var animationState = this.getState(animationName, layer);
		if (!animationState){
			animationState = this.gotoAndPlay(animationName, fadeInTime, duration, -1, layer, group, fadeOutMode);
		}

		if (normalizedTime >= 0){
			animationState.setCurrentTime(animationState.getTotalTime() * normalizedTime);
		}else{
			animationState.setCurrentTime(time);
		}

		animationState.stop();
		return animationState;
	},

	play:function(){
		if (this._animationDataList.length == 0){
			return;
		}

		if (!this._lastAnimationState){
			this.gotoAndPlay(this._animationDataList[0].name);
		}else if (!this._isPlaying){
			this._isPlaying = true;
		}
	},

	stop:function(){
		this._isPlaying = false;
	},

	advanceTime:function(passedTime){
		if (!this._isPlaying){
			return;
		}

		var isFading = false;
		passedTime *= this._timeScale;

		var animationState;
		var l = this._animationStateList.length;
		for (var i = 0; i < l; ++i){
			animationState = this._animationStateList[i];
			if (animationState.advanceTime(passedTime))
			{
				this.removeState(animationState);
				--i;
				--l;
			}else if (animationState._fadeState != dragonBones.FadeState.FADE_COMPLETE){
				isFading = true;
			}
		}
		this._isFading = isFading;
	},

	hasAnimation:function(animationName){
		var i = this._animationDataList.length;
		while(--i >= 0){
			if (this._animationDataList[i].name == animationName){
				return true;
			}
		}
		return false;
	},

	getState:function(name, layer){
		if (layer === undefined) { layer = 0; }

		var animationState;
		var i = this._animationStateList.length;
		while(--i >= 0){
			animationState = this._animationStateList[i];
			if (animationState.name == name && animationState._layer == layer){
				return animationState;
			}
		}
		return null;
	},

	/** @protected */
	addState:function(animationState){
		if(this._animationStateList.indexOf(animationState) == -1){
			this._animationStateList.push(animationState);
		}
	},

	/** @protected */
	removeState:function(animationState){
		var index = this._animationStateList.indexOf(animationState);

		if(index >= 0){
			this._animationStateList.splice(index, 1);
			dragonBones.AnimationState.returnObject(animationState);

			if (this._lastAnimationState == animationState)
			{
				if (this._animationStateList.length == 0){
					this._lastAnimationState = null;
				}else{
					this._lastAnimationState = this._animationStateList[this._animationStateList.length - 1];
				}
			}
		}
	},

	/** @protected */
	updateAnimationStates:function(){
		var i = this._animationStateList.length;
		while(--i >= 0){
			this._animationStateList[i].updateTimelineStates();
		}
	}
});

dragonBones.AnimationState = cc.Class.extend({
	additiveBlending:false,
	autoTween:false,
	autoFadeOut:false,
	displayControl:false,
	lastFrameAutoTween:false,
	fadeOutTime:0,
	weight:0,
	name:null,

	_isPlaying:false,
	_isComplete:false,
	_isFadeOut:false,
	_pausePlayheadInFade:false,
	_currentPlayTimes:0,
	_layer:0,
	_playTimes:0,
	_currentTime:0,
	_currentFrameIndex:0,
	_currentFramePosition:0,
	_currentFrameDuration:0,
	_totalTime:0,
	_time:0,
	_timeScale:0,
	_fadeWeight:0,
	_fadeTotalWeight:0,
	_fadeCurrentTime:0,
	_fadeTotalTime:0,
	_fadeBeginTime:0,
	_group:null,
	_fadeState:0,

	_timelineStateList:null,
	_mixingTransforms:null,

	_clip:null,
	_armature:null,

	ctor:function(){
		this._timelineStateList = [];
		this._mixingTransforms = [];
	},

	getIsComplete:function(){
		return this._isComplete;
	},

	getIsPlaying:function(){
		return (this._isPlaying && !this._isComplete);
	},

	getCurrentPlayTimes:function(){
		return this._currentPlayTimes < 0 ? 0 : this._currentPlayTimes;
	},

	getLayer:function(){
		return this._layer;
	},

	getTotalTime:function(){
		return this._totalTime * 0.001;//存在问题
	},

	getCurrentWeight:function(){
		return this._fadeWeight * this.weight;
	},

	getGroup:function(){
		return this._group;
	},

	getClip:function(){
		return this._clip;
	},

	setAdditiveBlending:function(value){
		this.additiveBlending = value;
		return this;
	},

	setAutoFadeOut:function(value, fadeOutTime_){
		if(fadeOutTime_ === undefined){ fadeOutTime_ = -1; }
		this.autoFadeOut = value;
		if (fadeOutTime_ >= 0){
			this.fadeOutTime = fadeOutTime_;
		}
		return this;
	},

	setWeight:function(value){
		this.weight = value;
		return this;
	},

	setFrameTween:function(autoTween_, lastFrameAutoTween_){
		this.autoTween = autoTween_;
		this.lastFrameAutoTween = lastFrameAutoTween_;
		return this;
	},

	getPlayTimes:function(){
		return this._playTimes;
	},

	setPlayTimes:function(playTimes){
		this._playTimes = playTimes;

		if (Math.round(this._totalTime * 0.001 * this._clip.frameRate) < 2){//存在问题
			this._playTimes = playTimes < 0 ? -1 : 1;
		}else{
			this._playTimes = playTimes < 0 ? -playTimes : playTimes;
		}
		this.autoFadeOut = playTimes < 0 ? true : false;
		return this;
	},

	getCurrentTime:function(){
		return this._currentTime < 0 ? 0 : this._currentTime * 0.001;
	},

	setCurrentTime:function(currentTime){
		if (currentTime < 0 || isNaN(currentTime)){//存在问题
			currentTime = 0;
		}

		this._time = currentTime;
		this._currentTime = this._time * 1000;//这里需要int型
		return this;
	},

	getTimeScale:function(){
		return this._timeScale;
	},

	setTimeScale:function(timeScale){
		if (isNaN(timeScale) || timeScale == Infinity || timeScale === undefined){
			timeScale = 1;
		}
		this._timeScale = timeScale;
		return this;
	},

	fadeOut:function(fadeTotalTime, pausePlayhead){
		if (!(fadeTotalTime >= 0)){
			fadeTotalTime = 0;
		}
		this._pausePlayheadInFade = pausePlayhead;

		var i;
		var len;
		if (this._isFadeOut){
			if (fadeTotalTime > this._fadeTotalTime / this._timeScale - (this._fadeCurrentTime - this._fadeBeginTime)){
				//如果已经在淡出中，新的淡出需要更长的淡出时间，则忽略
				return this;
			}
		}else{
			len = this._timelineStateList.length;
			i = 0;
			while(i < len){
				this._timelineStateList[i].fadeOut();
				i ++;
			}
		}

		// fade start
		this._isFadeOut = true;
		this._fadeTotalWeight = this._fadeWeight;
		this._fadeState = dragonBones.FadeState.FADE_BEFORE;
		this._fadeBeginTime = this._fadeCurrentTime;
		this._fadeTotalTime = this._fadeTotalWeight >= 0 ? fadeTotalTime * this._timeScale : 0;
		// default
		this.displayControl = false;
		return this;
	},

	play:function(){
		this._isPlaying = true;
		return this;
	},

	stop:function(){
		this._isPlaying = false;
		return this;
	},

	getMixingTransform:function(timelineName){
		return this._mixingTransforms.indexOf(timelineName) >= 0;
	},

	addMixingTransform:function(timelineName, recursive){
		if(recursive === undefined){ recursive = true; }

		if (recursive){
			var currentBone;
			var bone;
			var boneName;
			var boneList = this._armature.getBones();
			var i = boneList.length;
			while(--i >= 0){
				bone = boneList[i];
				boneName = bone.name;
				if(boneName == timelineName){
					currentBone = bone;
				}

				if(currentBone && (currentBone == bone || currentBone.contains(bone))){
					if(this._clip.getTimeline(boneName) && this._mixingTransforms.indexOf(boneName) < 0){
						this._mixingTransforms.push(boneName);
					}
				}
			}
		}else if(this._clip.getTimeline(timelineName)){
			if(this._mixingTransforms.indexOf(timelineName) < 0){
				this._mixingTransforms.push(timelineName);
			}
		}

		this.updateTimelineStates();
		return this;
	},

	removeMixingTransform:function(timelineName, recursive){
		if(recursive === undefined){ recursive = true; }

		var index;
		if (recursive){
			var currentBone;
			var bone;
			var boneName;
			var boneList = this._armature.getBones();
			var i = boneList.length;
			while(--i >= 0){
				bone = boneList[i];
				boneName = bone.name;
				if(boneName == timelineName){
					currentBone = bone;
				}

				if(currentBone && (currentBone == bone || currentBone.contains(bone))){
					index = this._mixingTransforms.indexOf(boneName);
					if(index >= 0){
						this._mixingTransforms.splice(index, 1);
					}
				}
			}
		}else{
			index = this._mixingTransforms.indexOf(boneName);
			if(index >= 0){
				this._mixingTransforms.splice(index, 1);
			}
		}

		this.updateTimelineStates();
		return this;
	},

	removeAllMixingTransform:function(){
		this._mixingTransforms.length = 0;
		this.updateTimelineStates();
		return this;
	},

	/** @private */
	fadeIn:function(armature, clip, fadeTotalTime, timeScale, playTimes, pausePlayhead){
		this._armature = armature;
		this._clip = clip;
		this._pausePlayheadInFade = pausePlayhead;
		this._totalTime = clip.duration;
		this.autoTween = clip.autoTween;
		this.name = clip.name;
		this.setTimeScale(timeScale);
		this.setPlayTimes(playTimes);
		// reset
		this._isComplete = false;
		this._currentFrameIndex = -1;
		this._currentPlayTimes = -1;

		if (Math.round(this._totalTime * 0.001 * this._clip.frameRate) < 2 || timeScale == Infinity){//存在问题
			this._currentTime = this._totalTime;
		}else{
			this._currentTime = -1;
		}

		this._time = 0;
		this._mixingTransforms.length = 0;
		// fade start
		this._isFadeOut = false;
		this._fadeWeight = 0;
		this._fadeTotalWeight = 1;
		this._fadeCurrentTime = 0;
		this._fadeBeginTime = this._fadeCurrentTime;
		this._fadeTotalTime = fadeTotalTime * this._timeScale;
		this._fadeState = dragonBones.FadeState.FADE_BEFORE;
		// default
		this._isPlaying = true;
		this.displayControl = true;
		this.lastFrameAutoTween = true;
		this.additiveBlending = false;
		this.weight = 1;
		this.fadeOutTime = fadeTotalTime;
		this.updateTimelineStates();
	},

	/** @private */
	advanceTime:function(passedTime){
		passedTime *= this._timeScale;
		this.advanceFadeTime(passedTime);
		if(this._fadeWeight){
			this.advanceTimelinesTime(passedTime);
		}
		return this._isFadeOut && this._fadeState == 2;//dragonBones.FadeState.FADE_COMPLETE
	},

	/** @private */
	updateTimelineStates:function(){
		var timelineState;
		var i = this._timelineStateList.length;
		var len;
		while(--i >= 0){
			timelineState = this._timelineStateList[i];
			if(!this._armature.getBone(timelineState.name)){
				this.removeTimelineState(timelineState);
			}
		}

		if (this._mixingTransforms.length == 0){
			len = this._clip.timelineList.length;
			i = 0;
			while(i < len){
				this.addTimelineState(this._clip.timelineList[i].name);
				i ++;
			}
		}else{
			i = this._timelineStateList.length;
			while(--i >= 0){
				timelineState = this._timelineStateList[i];
				if(this._mixingTransforms.indexOf(timelineState.name) < 0){
					this.removeTimelineState(timelineState);
				}
			}

			len = this._mixingTransforms.length;
			i = 0;
			while(i < len){
				this.addTimelineState(this._mixingTransforms[i]);
				i ++;
			}
		}
	},

	/** @private */
	addTimelineState:function(timelineName){
		var bone = this._armature.getBone(timelineName);
		if (bone){
			var len = this._timelineStateList.length;
			var i = 0;
			while(i < len){
				if (this._timelineStateList[i].name == timelineName){
					return;
				}
				i ++;
			}

			var timelineState = dragonBones.TimelineState.borrowObject();
			timelineState.fadeIn(bone, this, this._clip.getTimeline(timelineName));
			this._timelineStateList.push(timelineState);
		}
	},

	/** @private */
	removeTimelineState:function(timelineState){
		var index = this._timelineStateList.indexOf(timelineState);
		if(index >= 0){
			this._timelineStateList.splice(index, 1);
			dragonBones.TimelineState.returnObject(timelineState);
		}
	},

	/** @private */
	advanceFadeTime:function(passedTime){
		var fadeStartFlg = false;
		var fadeCompleteFlg = false;

		if (this._fadeBeginTime >= 0){
			var fadeState = this._fadeState;
			this._fadeCurrentTime += passedTime < 0 ? -passedTime : passedTime;

			if (this._fadeCurrentTime >= this._fadeBeginTime + this._fadeTotalTime){
				// fade complete
				if (this._fadeWeight == 1 || this._fadeWeight == 0)
				{
					fadeState = 2;//dragonBones.FadeState.FADE_COMPLETE;
					if (this._pausePlayheadInFade){
						this._pausePlayheadInFade = false;
						this._currentTime = -1;
					}
				}
				this._fadeWeight = this._isFadeOut ? 0 : 1;
			}else if (this._fadeCurrentTime >= this._fadeBeginTime){
				// fading
				fadeState = 1;//dragonBones.FadeState.FADING;
				this._fadeWeight = (this._fadeCurrentTime - this._fadeBeginTime) / this._fadeTotalTime * this._fadeTotalWeight;

				if (this._isFadeOut){
					this._fadeWeight = this._fadeTotalWeight - this._fadeWeight;
				}
			}else{
				// fade before
				fadeState = 0;//dragonBones.FadeState.FADE_BEFORE;
				this._fadeWeight = this._isFadeOut ? 1 : 0;
			}

			if(this._fadeState != fadeState){
				// _fadeState == FadeState::FADE_BEFORE && (fadeState == FadeState::FADING || fadeState == FadeState::FADE_COMPLETE)
				if (this._fadeState == 0){//dragonBones.FadeState.FADE_BEFORE
					fadeStartFlg = true;
				}

				// (_fadeState == FadeState::FADE_BEFORE || _fadeState == FadeState::FADING) && fadeState == FadeState::FADE_COMPLETE
				if (fadeState == 2){//dragonBones.FadeState.FADE_COMPLETE
					fadeCompleteFlg = true;
				}
				this._fadeState = fadeState;
			}
		}

		var eventDataType;
		var eventData;

		if (fadeStartFlg)
		{
			if (this._isFadeOut){
				eventDataType = dragonBones.EventType.FADE_OUT;
			}else{
				this.hideBones();
				eventDataType = dragonBones.EventType.FADE_IN;
			}

			if(this._armature._eventDispatcher.hasEvent(eventDataType)){
				eventData = dragonBones.EventData.borrowObject(eventDataType);
				eventData.armature = this._armature;
				eventData.animationState = this;
				this._armature._eventDataList.push(eventData);
			}
		}

		if (fadeCompleteFlg)
		{
			if (this._isFadeOut){
				eventDataType = dragonBones.EventType.FADE_OUT_COMPLETE;
			}else{
				eventDataType = dragonBones.EventType.FADE_IN_COMPLETE;
			}

			if (this._armature._eventDispatcher.hasEvent(eventDataType)){
				eventData = dragonBones.EventData.borrowObject(eventDataType);
				eventData.armature = this._armature;
				eventData.animationState = this;
				this._armature._eventDataList.push(eventData);
			}
		}
	},

	/** @private */
	advanceTimelinesTime:function(passedTime){
		if(this._isPlaying && !this._pausePlayheadInFade){
			this._time += passedTime;
		}

		var startFlg = false;
		var completeFlg = false;
		var loopCompleteFlg = false;
		var isThisComplete = false;
		var currentPlayTimes = 0;
		var currentTime = this._time * 1000;//这里需要int型

		if(this._playTimes == 0){
			isThisComplete = false;
			currentPlayTimes = Math.ceil(Math.abs(currentTime) / this._totalTime);//这里需要int型
			currentTime -= Math.floor(currentTime / this._totalTime) * this._totalTime;//这里需要int型
			//currentPlayTimes = (int)(ceil(abs(currentTime) / (float)(_totalTime)));
			//currentTime -= (int)(floor(currentTime / (float)(_totalTime))) * _totalTime;

			if (currentTime < 0){
				currentTime += this._totalTime;
			}
		}else{
			var totalTimes = this._playTimes * this._totalTime;

			if (currentTime >= totalTimes){
				currentTime = totalTimes;
				isThisComplete = true;
			}else if (currentTime <= -totalTimes){
				currentTime = -totalTimes;
				isThisComplete = true;
			}else{
				isThisComplete = false;
			}

			if (currentTime < 0)
			{
				currentTime += totalTimes;
			}

			currentPlayTimes = Math.ceil(currentTime / this._totalTime);//这里需要int型
			currentTime -= Math.floor(currentTime / this._totalTime) * this._totalTime;//这里需要int型
			//currentPlayTimes = (int)(ceil(currentTime / (float)(_totalTime)));
			//currentTime -= (int)(floor(currentTime / (float)(_totalTime))) * _totalTime;

			if (isThisComplete){
				currentTime = this._totalTime;
			}
		}

		if (currentPlayTimes == 0){
			currentPlayTimes = 1;
		}

		this._isComplete = isThisComplete;
		var progress = this._time * 1000 / this._totalTime;//存在问题

		var l = this._timelineStateList.length;
		var i = 0;
		var timeline;
		while(i < l){
			timeline = this._timelineStateList[i];
			timeline.update(progress);
			this._isComplete = timeline._isComplete && this._isComplete;
			i ++;
		}

		// update main timeline
		if(this._currentTime != currentTime){
			if(this._currentPlayTimes != currentPlayTimes){// check loop complete
				if(this._currentPlayTimes > 0 && currentPlayTimes > 1){
					loopCompleteFlg = true;
				}
				this._currentPlayTimes = currentPlayTimes;
			}

			if(this._currentTime < 0 && !this._pausePlayheadInFade){// check start
				startFlg = true;
			}

			if (this._isComplete){// check complete
				completeFlg = true;
			}
			this._currentTime = currentTime;
			this.updateMainTimeline(isThisComplete);
		}

		var eventData;
		if(startFlg){
			if (this._armature._eventDispatcher.hasEvent(dragonBones.EventType.START)){
				eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.START);
				eventData.armature = this._armature;
				eventData.animationState = this;
				this._armature._eventDataList.push(eventData);
			}
		}

		if(completeFlg){
			if (this._armature._eventDispatcher.hasEvent(dragonBones.EventType.COMPLETE)){
				eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.COMPLETE);
				eventData.armature = this._armature;
				eventData.animationState = this;
				this._armature._eventDataList.push(eventData);
			}

			if (this.autoFadeOut){
				this.fadeOut(this.fadeOutTime, true);
			}
		}else if (loopCompleteFlg){
			if (this._armature._eventDispatcher.hasEvent(dragonBones.EventType.LOOP_COMPLETE)){
				eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.LOOP_COMPLETE);
				eventData.armature = this._armature;
				eventData.animationState = this;
				this._armature._eventDataList.push(eventData);
			}
		}
	},

	/** @private */
	updateMainTimeline:function(isThisComplete){//自己修改过代码
		var frameList = this._clip.frameList;
		var l = frameList.length;
		if (l > 0){
			var prevFrame;
			var currentFrame;

			for (var i = 0; i < l; ++i){
				if(this._currentFrameIndex < 0){
					this._currentFrameIndex = 0;
				}else if(this._currentTime < this._currentFramePosition || this._currentTime >= this._currentFramePosition + this._currentFrameDuration){
					++this._currentFrameIndex;

					if(this._currentFrameIndex >= l){
						if (isThisComplete){
							--this._currentFrameIndex;
							break;
						}else{
							this._currentFrameIndex = 0;
						}
					}
				}else{
					break;
				}

				currentFrame = frameList[this._currentFrameIndex];

				if(prevFrame){
					this._armature.arriveAtFrame(prevFrame, this, true);
				}

				this._currentFrameDuration = currentFrame.duration;
				this._currentFramePosition = currentFrame.position;
				prevFrame = currentFrame;
			}

			if(currentFrame){
				this._armature.arriveAtFrame(currentFrame, this, false);
			}
		}
	},

	/** @private */
	hideBones:function(){
		var bone;
		for(var i = 0, l = this._clip.hideTimelineList.length; i < l; i++){
			bone = this._armature.getBone(this._clip.hideTimelineList[i]);
			if (bone){
				bone.hideSlots();
			}
		}
	},

	/** @private */
	clear:function(){
		var i = this._timelineStateList.length;
		while(--i >= 0){
			dragonBones.TimelineState.returnObject(this._timelineStateList[i]);
		}
		this._timelineStateList.length = 0;
		this._mixingTransforms.length = 0;

		this._armature = null;
		this._clip = null;
	}
});

var DBAnimationStatePool = [];
dragonBones.AnimationState._pool = DBAnimationStatePool;
dragonBones.AnimationState.borrowObject = function(){
	if (DBAnimationStatePool.length == 0){
		return new dragonBones.AnimationState();
	}
	return DBAnimationStatePool.pop();
};

dragonBones.AnimationState.returnObject = function(animationState){
	var index = DBAnimationStatePool.indexOf(animationState);
	if(index < 0){
		DBAnimationStatePool.push(animationState);
	}
	animationState.clear();
};

dragonBones.AnimationState.clearObjects = function(){
	var i = DBAnimationStatePool.length;
	while (--i >= 0) {
		DBAnimationStatePool[i].clear();
	}
	DBAnimationStatePool.length = 0;
};

dragonBones.TimelineState = cc.Class.extend({
	name:null,

	_blendEnabled:false,
	_isComplete:false,
	_tweenTransform:false,
	_tweenScale:false,
	_tweenColor:false,
	_currentTime:0,
	_currentFrameIndex:0,
	_currentFramePosition:0,
	_currentFrameDuration:0,
	_totalTime:0,
	_weight:0,
	_tweenEasing:0,

	_updateState:0,
	_transform:null,
	_durationTransform:null,
	_originTransform:null,
	_pivot:null,
	_durationPivot:null,
	_originPivot:null,
	_durationColor:null,

	_bone:null,
	_animationState:null,
	_timeline:null,

	ctor:function(){
		this._transform = new dragonBones.Transform();
		this._durationTransform = new dragonBones.Transform();
		this._pivot = new dragonBones.Point();
		this._durationPivot = new dragonBones.Point();
		this._durationColor = new dragonBones.ColorTransform();
	},

	/** @private */
	fadeIn:function(bone, animationState, timeline){
		this._bone = bone;
		this._animationState = animationState;
		this._timeline = timeline;
		this._isComplete = false;
		this._blendEnabled = false;
		this._tweenTransform = false;
		this._tweenScale = false;
		this._tweenColor = false;
		this._currentTime = -1;
		this._currentFrameIndex = -1;
		this._weight = 1;
		this._tweenEasing = dragonBones.USE_FRAME_TWEEN_EASING;
		this._totalTime = this._timeline.duration;
		this.name = this._timeline.name;
		this._transform.x = 0;
		this._transform.y = 0;
		this._transform.scaleX = 0;
		this._transform.scaleY = 0;
		this._transform.skewX = 0;
		this._transform.skewY = 0;
		this._pivot.x = 0;
		this._pivot.y = 0;
		this._durationTransform.x = 0;
		this._durationTransform.y = 0;
		this._durationTransform.scaleX = 0;
		this._durationTransform.scaleY = 0;
		this._durationTransform.skewX = 0;
		this._durationTransform.skewY = 0;
		this._durationPivot.x = 0;
		this._durationPivot.y = 0

		// copy
		this._originTransform = this._timeline.originTransform;
		// copy
		this._originPivot = this._timeline.originPivot;

		switch (this._timeline.frameList.length)
		{
		case 0:
			this._updateState = 2;//dragonBones.UpdateState.UNUPDATE;
			break;
		case 1:
			this._updateState = 1;//dragonBones.UpdateState.UPDATE_ONCE;
			break;
		default:
			this._updateState = 0;//dragonBones.UpdateState.UPDATE;
		break;
		}
		this._bone.addState(this);
	},

	/** @private */
	fadeOut:function(){
		this._transform.skewX = DBUtils.TransformUtil.formatRadian(this._transform.skewX);
		this._transform.skewY = DBUtils.TransformUtil.formatRadian(this._transform.skewY);
	},

	/** @private */
	update:function(progress){
		if (this._updateState == 0){//UpdateState.UPDATE
			this.updateMultipleFrame(progress);
		}else if (this._updateState == 1){//UpdateState.UPDATE_ONCE
			this.updateSingleFrame();
			this._updateState = 2;//UpdateState.UNUPDATE;
		}
	},

	/** @private */
	updateMultipleFrame:function(progress){
		progress /= this._timeline.scale;
		progress += this._timeline.offset;
		var currentTime = this._totalTime * progress;//这里需要int型
		var currentPlayTimes = 0;
		var playTimes = this._animationState.getPlayTimes();
		
		if (playTimes == 0){
			this._isComplete = false;
			currentPlayTimes = Math.ceil(Math.abs(currentTime) / this._totalTime) || 1;//这里需要int型
			
			//比对egretDragonBones修改
			if(currentTime >= 0){
				currentTime -= Math.floor(currentTime / this._totalTime) * this._totalTime;//这里需要int型
			}else{
				currentTime -= Math.ceil(currentTime / this._totalTime) * this._totalTime;//这里需要int型
			}
			if (currentTime < 0){
				currentTime += this._totalTime;
			}
		}else{
			var totalTimes = playTimes * this._totalTime;
			if (currentTime >= totalTimes){
				currentTime = totalTimes;
				this._isComplete = true;
			}else if (currentTime <= -totalTimes){
				currentTime = -totalTimes;
				this._isComplete = true;
			}else{
				this._isComplete = false;
			}

			if (currentTime < 0){
				currentTime += totalTimes;
			}

			currentPlayTimes = Math.ceil(currentTime / this._totalTime) || 1;
			if (this._isComplete){
				currentTime = this._totalTime;
			}else{
				//比对egretDragonBones修改
				if(currentTime>=0){
					currentTime -= Math.floor(currentTime / this._totalTime) * this._totalTime;
				}else{
					currentTime -= Math.ceil(currentTime / this._totalTime) * this._totalTime;
				}
			}
		}
		
		if (this._currentTime != currentTime){
			this._currentTime = currentTime;
			var prevFrame;
			var currentFrame;
			var frameList = this._timeline.frameList;
			var l = frameList.length;
			var i;
			for (i = 0; i < l; ++i){
				if (this._currentFrameIndex < 0){
					this._currentFrameIndex = 0;
				}else if (this._currentTime < this._currentFramePosition || this._currentTime >= this._currentFramePosition + this._currentFrameDuration){
					++this._currentFrameIndex;

					if(this._currentFrameIndex >= l){
						if (this._isComplete){
							--this._currentFrameIndex;
							break;
						}else{
							this._currentFrameIndex = 0;
						}
					}
				}else{
					break;
				}
				
				currentFrame = frameList[this._currentFrameIndex];

				if (prevFrame){
					this._bone.arriveAtFrame(prevFrame, this, this._animationState, true);
				}

				this._currentFrameDuration = currentFrame.duration;
				this._currentFramePosition = currentFrame.position;
				prevFrame = currentFrame;
			}
			
			if (currentFrame){
				this._bone.arriveAtFrame(currentFrame, this, this._animationState, false);
				this._blendEnabled = currentFrame.displayIndex >= 0;

				if (this._blendEnabled){
					this.updateToNextFrame(currentPlayTimes);
				}else{
					this._tweenEasing = dragonBones.NO_TWEEN_EASING;
					this._tweenTransform = false;
					this._tweenScale = false;
					this._tweenColor = false;
				}
			}

			if(this._blendEnabled){
				this.updateTween();
			}
		}
	},

	/** @private */
	updateToNextFrame:function(currentPlayTimes){
		var tweenEnabled = false;
		var nextFrameIndex = this._currentFrameIndex + 1;
		if (nextFrameIndex >= this._timeline.frameList.length){
			nextFrameIndex = 0;
		}

		var currentFrame = this._timeline.frameList[this._currentFrameIndex];
		var nextFrame = this._timeline.frameList[nextFrameIndex];
		
		if(nextFrameIndex == 0 &&
				(
						!this._animationState.lastFrameAutoTween ||
						(
								this._animationState.getPlayTimes() &&
								this._animationState.getCurrentPlayTimes() >= this._animationState.getPlayTimes() &&
								((this._currentFramePosition + this._currentFrameDuration) / this._totalTime + currentPlayTimes - this._timeline.offset) * this._timeline.scale > 0.999999
						)
				)
		){
			this._tweenEasing = dragonBones.NO_TWEEN_EASING;
			tweenEnabled = false;
		}else if (currentFrame.displayIndex < 0 || nextFrame.displayIndex < 0){
			this._tweenEasing = dragonBones.NO_TWEEN_EASING;
			tweenEnabled = false;
		}else if (this._animationState.autoTween){
			this._tweenEasing = this._animationState.getClip().tweenEasing;

			if(this._tweenEasing == dragonBones.USE_FRAME_TWEEN_EASING){
				this._tweenEasing = currentFrame.tweenEasing;

				if(this._tweenEasing == dragonBones.NO_TWEEN_EASING){// frame no tween
					tweenEnabled = false;
				}else{
					if (this._tweenEasing == dragonBones.AUTO_TWEEN_EASING){
						this._tweenEasing = 0;
					}
					// _tweenEasing [-1, 0) 0 (0, 1] (1, 2]
					tweenEnabled = true;
				}
			}else{ // animationData overwrite tween
				// _tweenEasing [-1, 0) 0 (0, 1] (1, 2]
				tweenEnabled = true;
			}
		}else{
			this._tweenEasing = currentFrame.tweenEasing;

			if (this._tweenEasing == dragonBones.NO_TWEEN_EASING || this._tweenEasing == dragonBones.AUTO_TWEEN_EASING|| this._tweenEasing == 0){// frame no tween
				this._tweenEasing = dragonBones.NO_TWEEN_EASING;
				tweenEnabled = false;
			}else{
				// _tweenEasing [-1, 0) 0 (0, 1] (1, 2]
				tweenEnabled = true;
			}
		}
		
		
		if (tweenEnabled){
			// transform
			this._durationTransform.x = nextFrame.transform.x - currentFrame.transform.x;
			this._durationTransform.y = nextFrame.transform.y - currentFrame.transform.y;
			this._durationTransform.skewX = nextFrame.transform.skewX - currentFrame.transform.skewX;
			this._durationTransform.skewY = nextFrame.transform.skewY - currentFrame.transform.skewY;
			this._durationTransform.scaleX = nextFrame.transform.scaleX - currentFrame.transform.scaleX + nextFrame.scaleOffset.x;
			this._durationTransform.scaleY = nextFrame.transform.scaleY - currentFrame.transform.scaleY + nextFrame.scaleOffset.y;
			
			if (nextFrameIndex == 0){
				this._durationTransform.skewX = DBUtils.TransformUtil.formatRadian(this._durationTransform.skewX);
				this._durationTransform.skewY = DBUtils.TransformUtil.formatRadian(this._durationTransform.skewY);
			}

			this._durationPivot.x = nextFrame.pivot.x - currentFrame.pivot.x;
			this._durationPivot.y = nextFrame.pivot.y - currentFrame.pivot.y;
			
			if (
					this._durationTransform.x ||
					this._durationTransform.y ||
					this._durationTransform.skewX ||
					this._durationTransform.skewY ||
					this._durationTransform.scaleX ||
					this._durationTransform.scaleY ||
					this._durationPivot.x ||
					this._durationPivot.y
			){
				this._tweenTransform = true;
				this._tweenScale = currentFrame.tweenScale;
			}else{
				this._tweenTransform = false;
				this._tweenScale = false;
			}
			
			// color
			if (currentFrame.color && nextFrame.color)
			{
				this._durationColor.alphaOffset = nextFrame.color.alphaOffset - currentFrame.color.alphaOffset;
				this._durationColor.redOffset = nextFrame.color.redOffset - currentFrame.color.redOffset;
				this._durationColor.greenOffset = nextFrame.color.greenOffset - currentFrame.color.greenOffset;
				this._durationColor.blueOffset = nextFrame.color.blueOffset - currentFrame.color.blueOffset;
				this._durationColor.alphaMultiplier = nextFrame.color.alphaMultiplier - currentFrame.color.alphaMultiplier;
				this._durationColor.redMultiplier = nextFrame.color.redMultiplier - currentFrame.color.redMultiplier;
				this._durationColor.greenMultiplier = nextFrame.color.greenMultiplier - currentFrame.color.greenMultiplier;
				this._durationColor.blueMultiplier = nextFrame.color.blueMultiplier - currentFrame.color.blueMultiplier;

				if(
						this._durationColor.alphaOffset ||
						this._durationColor.redOffset ||
						this._durationColor.greenOffset ||
						this._durationColor.blueOffset ||
						this._durationColor.alphaMultiplier ||
						this._durationColor.redMultiplier ||
						this._durationColor.greenMultiplier ||
						this._durationColor.blueMultiplier
				)
				{
					this._tweenColor = true;
				}
				else
				{
					this._tweenColor = false;
				}
			}else if (currentFrame.color){
				this._tweenColor = true;
				this._durationColor.alphaOffset = -currentFrame.color.alphaOffset;
				this._durationColor.redOffset = -currentFrame.color.redOffset;
				this._durationColor.greenOffset = -currentFrame.color.greenOffset;
				this._durationColor.blueOffset = -currentFrame.color.blueOffset;
				this._durationColor.alphaMultiplier = 1 - currentFrame.color.alphaMultiplier;
				this._durationColor.redMultiplier = 1 - currentFrame.color.redMultiplier;
				this._durationColor.greenMultiplier = 1 - currentFrame.color.greenMultiplier;
				this._durationColor.blueMultiplier = 1 - currentFrame.color.blueMultiplier;
			}else if (nextFrame.color){
				this._tweenColor = true;
				this._durationColor.alphaOffset = nextFrame.color.alphaOffset;
				this._durationColor.redOffset = nextFrame.color.redOffset;
				this._durationColor.greenOffset = nextFrame.color.greenOffset;
				this._durationColor.blueOffset = nextFrame.color.blueOffset;
				this._durationColor.alphaMultiplier = nextFrame.color.alphaMultiplier - 1;
				this._durationColor.redMultiplier = nextFrame.color.redMultiplier - 1;
				this._durationColor.greenMultiplier = nextFrame.color.greenMultiplier - 1;
				this._durationColor.blueMultiplier = nextFrame.color.blueMultiplier - 1;
			}else{
				this._tweenColor = false;
			}
		}else{
			this._tweenTransform = false;
			this._tweenScale = false;
			this._tweenColor = false;
		}
		
		if (!this._tweenTransform)
		{
			if (this._animationState.additiveBlending)
			{
				this._transform.x = currentFrame.transform.x;
				this._transform.y = currentFrame.transform.y;
				this._transform.skewX = currentFrame.transform.skewX;
				this._transform.skewY = currentFrame.transform.skewY;
				this._transform.scaleX = currentFrame.transform.scaleX;
				this._transform.scaleY = currentFrame.transform.scaleY;
				this._pivot.x = currentFrame.pivot.x;
				this._pivot.y = currentFrame.pivot.y;
			}else{
				this._transform.x = this._originTransform.x + currentFrame.transform.x;
				this._transform.y = this._originTransform.y + currentFrame.transform.y;
				this._transform.skewX = this._originTransform.skewX + currentFrame.transform.skewX;
				this._transform.skewY = this._originTransform.skewY + currentFrame.transform.skewY;
				this._transform.scaleX = this._originTransform.scaleX + currentFrame.transform.scaleX;
				this._transform.scaleY = this._originTransform.scaleY + currentFrame.transform.scaleY;
				this._pivot.x = this._originPivot.x + currentFrame.pivot.x;
				this._pivot.y = this._originPivot.y + currentFrame.pivot.y;
			}

			this._bone.invalidUpdate();
		}else if (!this._tweenScale){
			if (this._animationState.additiveBlending)
			{
				this._transform.scaleX = currentFrame.transform.scaleX;
				this._transform.scaleY = currentFrame.transform.scaleY;
			}else{
				this._transform.scaleX = this._originTransform.scaleX + currentFrame.transform.scaleX;
				this._transform.scaleY = this._originTransform.scaleY + currentFrame.transform.scaleY;
			}
		}
		
		if (!this._tweenColor && this._animationState.displayControl){
			if (currentFrame.color){
				this._bone.updateColor(
						currentFrame.color.alphaOffset,
						currentFrame.color.redOffset,
						currentFrame.color.greenOffset,
						currentFrame.color.blueOffset,
						currentFrame.color.alphaMultiplier,
						currentFrame.color.redMultiplier,
						currentFrame.color.greenMultiplier,
						currentFrame.color.blueMultiplier,
						true
				);
			}else if (this._bone._isColorChanged){
				this._bone.updateColor(0, 0, 0, 0, 1, 1, 1, 1, false);
			}
		}
	},

	/** @private */
	updateTween:function(){
		var progress = (this._currentTime - this._currentFramePosition) / this._currentFrameDuration;
		if(this._tweenEasing && this._tweenEasing != dragonBones.NO_TWEEN_EASING){
			progress = DBUtils.TransformUtil.getEaseValue(progress, this._tweenEasing);
		}
		
		var currentFrame = this._timeline.frameList[this._currentFrameIndex];
		
		if (this._tweenTransform)
		{
			var currentTransform = currentFrame.transform;
			var currentPivot = currentFrame.pivot;
			if (this._animationState.additiveBlending){
				//additive blending
				this._transform.x = currentTransform.x + this._durationTransform.x * progress;
				this._transform.y = currentTransform.y + this._durationTransform.y * progress;
				this._transform.skewX = currentTransform.skewX + this._durationTransform.skewX * progress;
				this._transform.skewY = currentTransform.skewY + this._durationTransform.skewY * progress;

				if (this._tweenScale){
					this._transform.scaleX = currentTransform.scaleX + this._durationTransform.scaleX * progress;
					this._transform.scaleY = currentTransform.scaleY + this._durationTransform.scaleY * progress;
				}

				this._pivot.x = currentPivot.x + this._durationPivot.x * progress;
				this._pivot.y = currentPivot.y + this._durationPivot.y * progress;
			}else{
				// normal blending
				this._transform.x = this._originTransform.x + currentTransform.x + this._durationTransform.x * progress;
				this._transform.y = this._originTransform.y + currentTransform.y + this._durationTransform.y * progress;
				this._transform.skewX = this._originTransform.skewX + currentTransform.skewX + this._durationTransform.skewX * progress;
				this._transform.skewY = this._originTransform.skewY + currentTransform.skewY + this._durationTransform.skewY * progress;

				if (this._tweenScale)
				{
					this._transform.scaleX = this._originTransform.scaleX + currentTransform.scaleX + this._durationTransform.scaleX * progress;
					this._transform.scaleY = this._originTransform.scaleY + currentTransform.scaleY + this._durationTransform.scaleY * progress;
				}

				this._pivot.x = this._originPivot.x + currentPivot.x + this._durationPivot.x * progress;
				this._pivot.y = this._originPivot.y + currentPivot.y + this._durationPivot.y * progress;
			}
			this._bone.invalidUpdate();
		}
		
		if (this._tweenColor && this._animationState.displayControl)
		{
			if (currentFrame.color)
			{
				this._bone.updateColor(
						currentFrame.color.alphaOffset + this._durationColor.alphaOffset * progress,
						currentFrame.color.redOffset + this._durationColor.redOffset * progress,
						currentFrame.color.greenOffset + this._durationColor.greenOffset * progress,
						currentFrame.color.blueOffset + this._durationColor.blueOffset * progress,
						currentFrame.color.alphaMultiplier + this._durationColor.alphaMultiplier * progress,
						currentFrame.color.redMultiplier + this._durationColor.redMultiplier * progress,
						currentFrame.color.greenMultiplier + this._durationColor.greenMultiplier * progress,
						currentFrame.color.blueMultiplier + this._durationColor.blueMultiplier * progress,
						true
				);
			}
			else
			{
				this._bone.updateColor(
						this._durationColor.alphaOffset * progress,
						this._durationColor.redOffset * progress,
						this._durationColor.greenOffset * progress,
						this._durationColor.blueOffset * progress,
						1 + this._durationColor.alphaMultiplier * progress,
						1 + this._durationColor.redMultiplier * progress,
						1 + this._durationColor.greenMultiplier * progress,
						1 + this._durationColor.blueMultiplier * progress,
						true
				);
			}
		}
	},

	/** @private */
	updateSingleFrame:function(){
		var currentFrame = this._timeline.frameList[0];
		this._bone.arriveAtFrame(currentFrame, this, this._animationState, false);
		this._isComplete = true;
		this._tweenTransform = false;
		this._tweenScale = false;
		this._tweenColor = false;
		this._tweenEasing = dragonBones.NO_TWEEN_EASING;
		this._blendEnabled = currentFrame.displayIndex >= 0;
		
		if (this._blendEnabled)
		{
			if (this._animationState.additiveBlending)
			{
				// additive blending
				// singleFrame.transform (0)
				this._transform.x =
					this._transform.y =
						this._transform.skewX =
							this._transform.skewY =
								this._transform.scaleX =
									this._transform.scaleY = 0;
				this._pivot.x = 0;
				this._pivot.y = 0;
			}else{
				this._transform.x = this._originTransform.x;
				this._transform.y = this._originTransform.y;
				this._transform.skewX = this._originTransform.skewX;
				this._transform.skewY = this._originTransform.skewY;
				this._transform.scaleX = this._originTransform.scaleX;
				this._transform.scaleY = this._originTransform.scaleY;

				this._pivot.x = this._originPivot.x;
				this._pivot.y = this._originPivot.y;
			}

			this._bone.invalidUpdate();

			if (this._animationState.displayControl){
				if (currentFrame.color){
					this._bone.updateColor(
							currentFrame.color.alphaOffset,
							currentFrame.color.redOffset,
							currentFrame.color.greenOffset,
							currentFrame.color.blueOffset,
							currentFrame.color.alphaMultiplier,
							currentFrame.color.redMultiplier,
							currentFrame.color.greenMultiplier,
							currentFrame.color.blueMultiplier,
							true
					);
				}else if (_bone._isColorChanged){
					this._bone.updateColor(0, 0, 0, 0, 1, 1, 1, 1, false);
				}
			}
		}
	},

	/** @private */
	clear:function(){
		if(this._bone){
			this._bone.removeState(this);
			this._bone = null;
		}
		
		this._animationState = null;
		this._timeline = null;
		this._originTransform = null;
		this._originPivot = null;
	}
});

var DBTimelineStatePool = [];
dragonBones.TimelineState._pool = DBTimelineStatePool;
dragonBones.TimelineState.borrowObject = function(){
	if (DBTimelineStatePool.length == 0){
		return new dragonBones.TimelineState();
	}
	return DBTimelineStatePool.pop();
};

dragonBones.TimelineState.returnObject = function(timelineState){
	if(DBTimelineStatePool.indexOf(timelineState) < 0){
		DBTimelineStatePool.push(timelineState);
	}
	timelineState.clear();
};
dragonBones.TimelineState.clearObjects = function(){
	var i = DBTimelineStatePool.length;
	while (--i >= 0) {
		DBTimelineStatePool[i].clear();
	}
	DBTimelineStatePool.length = 0;
};
/*----------------------------------------------------------------------animation部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------core部分---------------------------------------------------------------*/
dragonBones.Armature = cc.Class.extend({
	name:null,
	userData:null,
	
	_needUpdate:false,
	_slotsZOrderChanged:false,
	_delayDispose:false,
	_lockDispose:false,
	_isInheritAnimation:false,

	_boneList:null,
	_slotList:null,
	_eventDataList:null,

	_armatureData:null,
	_animation:null,
	_eventDispatcher:null,
	_display:null,
    _displayBatchNode:null,

	ctor:function(armatureData, animation, eventDispatcher, display){
		this._armatureData = armatureData;
		this._animation = animation;
		this._eventDispatcher = eventDispatcher;
		this._display = display;
		
		this._animation._armature = this;
		this._slotsZOrderChanged = false;
		
		this._boneList = [];
		this._slotList = [];
		this._eventDataList = [];
		
		this._delayDispose = false;
		this._lockDispose = false;
		this._needUpdate = false;
		
		this._isInheritAnimation = true;
		
	},
	
	getBoundingBox:function(){},
	getBones:function(){
		return this._boneList;
	},
	
	getSlots:function(){
		return this._slotList;
	},

	getArmatureData:function(){
		return this._armatureData;
	},
	getAnimation:function(){
		return this._animation;
	},
	getDisplay:function(){
		return this._display;
	},
	getEventDispatcher:function(){
		return this._eventDispatcher;
	},
	
	isInheritAnimation:function(){ return this._isInheritAnimation; },
	
	setInheritAnimation:function(b) { this._isInheritAnimation = b; },
	
	getBone:function(boneName){
		var len = this._boneList.length;
		var bone;
		for (var i = 0; i < len; ++i){
			bone = this._boneList[i];
			if (bone.name == boneName){
				return bone;
			}
		}
		return null;
	},
	
	getBoneByDisplay:function(display){
		var slot = this.getSlotByDisplay(display);
		return slot ? slot._parent : null;
	},
	
	addBone:function(bone, parentBoneName){
		if(parentBoneName === undefined){
			if (bone._parent){
				bone._parent.removeChild(bone);
			}
			bone.setArmature(this);
		}else{
			if(parentBoneName == null){
				throw new Error();
			}
			
			var boneParent = this.getBone(parentBoneName);
			if (!boneParent) throw new Error();
			boneParent.addChild(bone);
		}
	},
	
	removeBone:function(bone){
		if(bone == null) throw new Error();
		
		if(cc.isString(bone)){
			var bone1 = this.getBone(bone);
			if (bone1){
				this.removeBone(bone1);
			}
			return bone1;
		}else{
			if (bone._armature != this) throw new Error();
			
			if (bone._parent){
				bone._parent.removeChild(bone);
			}else{
				bone.setArmature(null);
			}
		}
	},
	
	removeBoneByName:function(boneName){//这里是一个函数重载在JSB绑定是需要做修改
		var bone = this.getBone(boneName);
		if (bone){
			this.removeBone(bone);
		}
		return bone;
	},

	getSlot:function(slotName){
		var len = this._slotList.length;
		var slot;
		for (var i = 0; i < len; ++i){
			slot = this._slotList[i];
			if (slot.name == slotName){
				return slot;
			}
		}
		return null;
	},
	
	getSlotByDisplay:function(display){
		if(display){
			var len = this._slotList.length;
			var slot;
			for (var i = 0; i < len; ++i){
				slot = this._slotList[i];
				if (slot._display == display){
					return slot;
				}
			}
		}
		return null;
	},
	
	addSlot:function(slot, parentBoneName){
		var bone = this.getBone(parentBoneName);
		if (bone){
			bone.addChild(slot);
		}else{
			throw new Error();//抛出错误
		}
	},
	
	removeSlot:function(slot){
		if (!slot || slot._armature != this){
			throw new Error();//抛出错误
		}
		slot._parent.removeChild(slot);
	},
	
	removeSlotByName:function(slotName){//这里是一个函数重载在JSB绑定是需要做修改
		var slot = this.getSlot(slotName);
		if (slot){
			this.removeSlot(slot);
		}
		return slot;
	},
	
	replaceSlot:function(boneName, oldSlotName, newSlot){
		var bone = this.getBone(boneName);
		if (!bone) return;

		var slots = bone.getSlots();
		var len = slots.length;
		var i;
		var it;
		var oldSlog;
		for(i = 0; i < len; i++){
			it = slots[i];
			if(it.name == oldSlotName){
				oldSlog = it;
				break;
			}
		}
		
		if(oldSlog){
			newSlot._tweenZOrder = oldSlog._tweenZOrder;
			newSlot._originZOrder = oldSlog._originZOrder;
			newSlot._offsetZOrder = oldSlog._offsetZOrder;
			newSlot._blendMode = oldSlog._blendMode;
			removeSlot(oldSlog);
		}

		newSlot.name = oldSlotName;
		bone.addChild(newSlot);
	},
	
	sortSlotsByZOrder:function(){
		this._slotList.sort(this.sortSlot);
		var l = this._slotList.length;
		var i;
		var slot;
		for (i = 0; i < l; ++i){
			slot = _slotList[i];
			if (slot._isShowDisplay){
				slot.removeDisplayFromContainer();
			}
		}
		
		l = this._slotList.length;
		for (i = 0; i < l; ++i){
			slot = _slotList[i];
			if (slot._isShowDisplay){
				slot.addDisplayToContainer(this, -1);
			}
		}
		this._slotsZOrderChanged = false;
	},
	
	invalidUpdate:function(boneName){
		if(boneName === undefined){ boneName = null; }
		
		if(boneName){
			if(boneName == null) throw Error();
			var bone = this.getBone(boneName);
			if (bone){
				bone.invalidUpdate();
			}
		}else{
			var i =this._boneList.length;
			while(--i >= 0){
				this._boneList[i].invalidUpdate();
			}
		}
	},
	
	advanceTime:function(passedTime){
		this._lockDispose = true;
		this._animation.advanceTime(passedTime);
		passedTime *= this._animation._timeScale;
		var isFading = this._animation._isFading;
		
		var i = this._boneList.length;
		while(--i >= 0){
			this._boneList[i].update(isFading);
		}
		
		i = this._slotList.length;
		var slot;
		while(--i >= 0){
			slot = this._slotList[i];
			slot.update();
			if (slot._isShowDisplay && slot._childArmature){
				slot._childArmature.advanceTime(passedTime);
			}
		}
		
		if(this._slotsZOrderChanged){
			this.sortSlotsByZOrder();
			//不发送更新Z轴事件
			/*if (this._eventDispatcher.hasEvent(dragonBones.EventType.Z_ORDER_UPDATED)){
				var eventData = new dragonBones.EventData(dragonBones.EventType.Z_ORDER_UPDATED, this);
				this._eventDataList.push(eventData);
			}*/
		}
		
		var len = this._eventDataList.length;
		var event;
		if(len > 0){
			for (i = 0; i < len; ++i){
				event = this._eventDataList[i];
				this._eventDispatcher.dispatchEvent(event);
				dragonBones.EventData.returnObject(event);
			}
			this._eventDataList.length = 0;
		}

		this._lockDispose = false;
		if(this._delayDispose){
			dispose();
		}
	},
	
	dispose:function(){
		this._delayDispose = true;
		if(!this._animation || this._lockDispose){
			return;
		}

		if (this._animation){
			this._animation.dispose();
			this._animation = null;
		}

		//存在问题
		var i = this._boneList.length;
		while(--i >= 0){
			this._boneList[i].dispose();
		}

		i = this._slotList.length;
		while(--i >= 0){
			this._slotList[i].dispose();
		}

		i = this._eventDataList.length;
		while(--i >= 0){
			dragonBones.EventData.returnObject(this._eventDataList[i]);
		}
		
		this._boneList.length = 0;
		this._slotList.length = 0;
		this._eventDataList.length = 0;

		if(this._eventDispatcher){
			this._eventDispatcher.dispose();
			this._eventDispatcher = null;
		}

		if (this._display) this._display = null;
		if (this.userData) this.userData = null;
	},
	
	/** @protected */
	addObject:function(object){
		if (object instanceof dragonBones.Bone){
			if (this._boneList.indexOf(object) < 0){
				this._boneList.push(object);
				this.sortBones();
				this._animation.updateAnimationStates();
			}
		}else if (object instanceof dragonBones.Slot){
			if(this._slotList.indexOf(object) < 0){
				this._slotList.push(object);
			}
		}
	},
	
	/** @protected */
	removeObject:function(object){
		var index;
		if (object instanceof dragonBones.Bone){
			index = this._boneList.indexOf(object);
			if (index >= 0){
				this._boneList.splice(index, 1);
				this._animation.updateAnimationStates();
			}
		}else if (object instanceof dragonBones.Slot){
			index = this._slotList.indexOf(object);
			if(index >= 0){
				this._slotList.splice(index, 1);
			}
		}
	},
	
	/** @protected */
	sortBones:function(){
		var l = this._boneList.length;
		if(l == 0){
			return;
		}
		var sortedList = [];
		var i;
		var bone;
		var parentBone;
		var level;
		for (i = 0; i < l; ++i){
			bone = this._boneList[i];
			parentBone = bone;
			level = 0;
			while (parentBone){
				parentBone = parentBone._parent;
				++level;
			}
			sortedList.push([level , bone]);
		}
		sortedList.sort(dragonBones.Armature.sortBone);
		
		l = sortedList.length;
		for (i = 0; i < l; ++i){
			this._boneList[i] = sortedList[i][1];
		}
	},
	/** @protected */
	sortSlot:function(a, b){
		return a.getZOrder() - b.getZOrder();
	},
	/** @protected */
	arriveAtFrame:function(frame, animationState, isCross){
		var eventData;
		if (frame.event && this._eventDispatcher.hasEvent(dragonBones.EventType.ANIMATION_FRAME_EVENT)){
			eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.ANIMATION_FRAME_EVENT);
			eventData.armature = this;
			eventData.animationState = animationState;
			eventData.frameLabel = frame.event;
			eventData.frame = frame;
			this._eventDataList.push(eventData);
		}

		if (frame.sound && DBSoundEventDispatcher && DBSoundEventDispatcher.hasEvent(dragonBones.EventType.SOUND)){
			eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.SOUND);
			eventData.armature = this;
			eventData.animationState = animationState;
			eventData.sound = frame.sound;
			DBSoundEventDispatcher.dispatchEvent(eventData);
		}

		if (frame.action){
			if (animationState.displayControl){
				this._animation.gotoAndPlay(frame.action);
			}
		}
	}
});

var DBSoundEventDispatcher = null;//替换dragonBones.Armature.soundEventDispatcher = null;
dragonBones.Armature.sortBone = function(a, b){
	return a[0] > b[0] ? -1 : 1;
};


dragonBones.Object = cc.Class.extend({
	inheritRotation:false,
	inheritScale:false,
	name:null,
	global:null,
	origin:null,
	offset:null,
	globalTransformMatrix:null,
	userData:null,

	_visible:false,
	_armature:null,
	_parent:null,

	ctor:function(){
		this.global = new dragonBones.Transform();
		this.origin = new dragonBones.Transform();
		this.offset = new dragonBones.Transform();
		this.offset.scaleX =  1;
        this.offset.scaleY = 1;

		this.globalTransformMatrix = new dragonBones.Matrix();
		this._visible = true;
	},

	getVisible:function () {
		return this._visible;
	},

	setVisible:function (value) {
		this._visible = value;
	},
	
	getParent:function(){
		return this._parent;
	},
	
	getArmature:function(){
		return this._armature;
	},
	
	/** @protected */
	setParent:function (value) {
		this._parent = value;
	},
	
	/** @protected */
	setArmature:function (value) {
		if (this._armature){
			this._armature.removeObject(this);
		}
		this._armature = value;
		if (this._armature){
			this._armature.addObject(this);
		}
	},

	dispose:function(){
		this._parent = null;
		this._armature = null;
		this._globalTransformMatrix = null;
		this.global = null;
		this.origin = null;
		this.offset = null;
		this.userData = null;
	}
});

dragonBones.Bone = dragonBones.Object.extend({
	displayController:null,
	_isColorChanged:false,
	_needUpdate:0,
	_tweenPivot:null,
	_tween:null,
	_boneList:null,
	_slotList:null,
	_timelineStateList:null,
	
	ctor:function(){
		dragonBones.Object.prototype.ctor.call(this);
		this._needUpdate = 2;
		this._tween = new dragonBones.Transform();
		this._tween.scaleX = 0;
		this._tween.scaleY = 0;
		
		this._tweenPivot = new dragonBones.Point();
		
		this._boneList = [];
		this._slotList = [];
		this._timelineStateList = [];
		
		this.inheritRotation = true;
		this.inheritScale = false;
	},
	
	getSlot:function(){
		return this._slotList.length == 0 ? null : this._slotList[0];
	},
	
	getSlots:function(){
		return this._slotList;
	},
	
	getBones:function(){
		return this._boneList;
	},
	
	setVisible:function(vislble){
		if (this._visible != visible){
			this._visible = visible;
			var l = this._slotList.length;
			for (var i = 0; i < l; ++i){
				this._slotList[i].updateDisplayVisible(this._visible);
			}
		}
	},
	
	dispose:function(){
		if(!this._boneList){
			return;
		}
		
		dragonBones.Object.prototype.dispose.call(this);
		
		var i = this._boneList.length;
		while(--i >= 0){
			this._boneList[i].dispose();
		}

		i = this._slotList.length;
		while(--i >= 0){
			this._slotList[i].dispose();
		}

		this._timelineStateList.length = 0;
		this._tween = null;
		this._tweenPivot = null;
		this._boneList = null;
		this._slotList = null;
		this._timelineStateList = null;
	},
	
	invalidUpdate:function(){
		this._needUpdate = 2;
	},
	
	contains:function(object){
		if (!object){
			throw new Error();
		}
		
		if (object == this){
			return false;
		}
		
		var ancestor = object;
		while (!(ancestor == this || ancestor == null)){
			ancestor = ancestor.getParent();
		}
		return ancestor == this;
	},
	
	addChild:function(object){
		if (!object){
			throw new Error();
		}

		var bone = (object instanceof dragonBones.Bone) ? object : null;
		var slot = (object instanceof dragonBones.Slot) ? object : null;

		if (object == this || (bone && bone.contains(this))){
			cc.assert("Error An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
		}

		if(object && object.getParent()){
			object.getParent().removeChild(object);
		}

		if (bone){
			this._boneList.push(bone);
			bone.setParent(this);
			bone.setArmature(this._armature);
		}else if (slot){
			this._slotList.push(slot);
			slot.setParent(this);
			slot.setArmature(this._armature);
		}
	},
	
	removeChild:function(object){
		if (!object){
			throw new Error();
		}

		var bone = (object instanceof dragonBones.Bone) ? object : null;
		var slot = (object instanceof dragonBones.Slot) ? object : null;

		var index;
		if (bone){
			index = this._boneList.indexOf(bone);
			if(index < 0){
				throw new Error();
			}
			
			this._boneList.splice(index, 1);
			bone.setParent(null);
			bone.setArmature(null);
		}else if (slot){
			index = this._slotList.indexOf(slot);
			if(index < 0){
				throw new Error();
			}
			
			this._slotList.splice(index, 1);
			slot.setParent(null);
			slot.setArmature(null);
		}
	},
	
	/** @protected */
	setArmature:function(armature){
		dragonBones.Object.prototype.setArmature.call(this, armature);
		var i;
		
		var l = this._boneList.length;
		for (i = 0; i < l; ++i){
			this._boneList[i].setArmature(armature);
		}
		
		l = this._slotList.length;
		for(i = 0; i < l; ++i){
			this._slotList[i].setArmature(armature);
		}
	},
	
	/** @protected */
	update:function(needUpdate){
		this._needUpdate --;

		if (needUpdate || this._needUpdate > 0 || (this._parent && this._parent._needUpdate > 0)){
			this._needUpdate = 1;
		}else{
			return;
		}
		
		this.blendingTimeline();
		this.global.scaleX = (this.origin.scaleX + this._tween.scaleX) * this.offset.scaleX;
		this.global.scaleY = (this.origin.scaleY + this._tween.scaleY) * this.offset.scaleY;
		
		if (this._parent){
			var  x = this.origin.x + this.offset.x + this._tween.x;
			var  y = this.origin.y + this.offset.y + this._tween.y;
			var parentMatrix = this._parent.globalTransformMatrix;
			this.globalTransformMatrix.tx = this.global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
			this.globalTransformMatrix.ty = this.global.y = parentMatrix.d * y + parentMatrix.b * x + parentMatrix.ty;

			if (this.inheritRotation){
				this.global.skewX = this.origin.skewX + this.offset.skewX + this._tween.skewX + this._parent.global.skewX;
				this.global.skewY = this.origin.skewY + this.offset.skewY + this._tween.skewY + this._parent.global.skewY;
			}else{
				this.global.skewX = this.origin.skewX + this.offset.skewX + this._tween.skewX;
				this.global.skewY = this.origin.skewY + this.offset.skewY + this._tween.skewY;
			}

			if (this.inheritScale){
				this.global.scaleX *= this._parent.global.scaleX;
				this.global.scaleY *= this._parent.global.scaleY;
			}
		}else{
			this.globalTransformMatrix.tx = this.global.x = this.origin.x + this.offset.x + this._tween.x;
			this.globalTransformMatrix.ty = this.global.y = this.origin.y + this.offset.y + this._tween.y;
			this.global.skewX = this.origin.skewX + this.offset.skewX + this._tween.skewX;
			this.global.skewY = this.origin.skewY + this.offset.skewY + this._tween.skewY;
		}
		
		this.globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
		this.globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
		this.globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
		this.globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX);
	},
	
	/** @protected */
	updateColor:function(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier, colorChanged){
		var l = this._slotList.length;
		for (var i = 0; i < l; ++i){
			this._slotList[i].updateDisplayColor(
					aOffset, rOffset, gOffset, bOffset,
					aMultiplier, rMultiplier, gMultiplier, bMultiplier);
		}
		this._isColorChanged = colorChanged;
	},
	
	/** @protected */
	hideSlots:function(){
		var l = this._slotList.length;
		for (var i = 0; i < l; ++i){
			this._slotList[i].changeDisplay(-1);
		}
	},
	
	/** @protected */
	arriveAtFrame:function(frame, timelineState, animationState, isCross){
		var displayControl = animationState.displayControl && (!this.displayController || this.displayController == animationState.name);
		
		var l;
		var i;
		var slot;
		if (displayControl)
		{
			var displayIndex = frame.displayIndex;
			l = this._slotList.length;
			for (i = 0; i < l; ++i)
			{
				slot = this._slotList[i];
				slot.changeDisplay(displayIndex);
				slot.updateDisplayVisible(frame.visible);

				if (displayIndex >= 0){
					if (!isNaN(frame.zOrder) && frame.zOrder != slot._tweenZOrder){
						slot._tweenZOrder = frame.zOrder;
						this._armature._slotsZOrderChanged = true;
					}
				}
			}

			var eventData;
			if (frame.event && this._armature._eventDispatcher.hasEvent(dragonBones.EventType.BONE_FRAME_EVENT)){
				eventData = dragonBones.EventData.borrowObject(dragonBones.EventType.BONE_FRAME_EVENT);
				eventData.armature = this._armature;
				eventData.bone = this;
				eventData.animationState = animationState;
				eventData.frameLabel = frame.event;
				eventData.frame = frame;
				this._armature._eventDataList.push_back(eventData);
			}

			if (frame.sound && DBSoundEventDispatcher && DBSoundEventDispatcher.hasEvent(dragonBones.EventType.SOUND))
			{
				eventData = dragonBones.EventData.borrowObject(EventData.EventType.SOUND);
				eventData.armature = this._armature;
				eventData.bone = this;
				eventData.animationState = animationState;
				eventData.sound = frame.sound;
				DBSoundEventDispatcher.dispatchEvent(eventData);
			}

			if(frame.action){
				var len = this._slotList.length;
				for (var j = 0; j < len; ++j){
					if (this._slotList[j]._childArmature){
						this._slotList[j]._childArmature._animation.gotoAndPlay(frame.action);
					}
				}
			}
		}
	},
	
	/** @protected */
	addState:function(timelineState){
		if(this._timelineStateList.indexOf(timelineState) < 0){
			this._timelineStateList.push(timelineState);
			this._timelineStateList.sort(dragonBones.Bone.sortState);
		}
	},
	
	/** @protected */
	removeState:function(timelineState){
		var index = this._timelineStateList.indexOf(timelineState);
		if(index >= 0){
			this._timelineStateList.splice(index, 1);
		}
	},
	
	/** @protected */
	blendingTimeline:function(){
		var i = this._timelineStateList.length;
		var timelineState;
		var transform;
		var pivot;
		var weight;

		if(i == 1){
			timelineState = this._timelineStateList[0];
			transform = timelineState._transform;
			pivot = timelineState._pivot;
			timelineState._weight = timelineState._animationState.getCurrentWeight();
			weight = timelineState._weight;
			this._tween.x = transform.x * weight;
			this._tween.y = transform.y * weight;
			this._tween.skewX = transform.skewX * weight;
			this._tween.skewY = transform.skewY * weight;
			this._tween.scaleX = transform.scaleX * weight;
			this._tween.scaleY = transform.scaleY * weight;
			this._tweenPivot.x = pivot.x * weight;
			this._tweenPivot.y = pivot.y * weight;
		}else if (i > 1){
			var prevLayer = this._timelineStateList[i - 1]._animationState.getLayer();
			var currentLayer = 0;
			var weigthLeft = 1;
			var layerTotalWeight = 0;
			var x = 0;
			var y = 0;
			var skewX = 0;
			var skewY = 0;
			var scaleX = 0;
			var scaleY = 0;
			var pivotX = 0;
			var pivotY = 0;

			while (i--)
			{
				timelineState = this._timelineStateList[i];
				currentLayer = timelineState._animationState.getLayer();

				if (prevLayer != currentLayer){
					if (layerTotalWeight >= weigthLeft){
						timelineState._weight = 0;
						break;
					}else{
						weigthLeft -= layerTotalWeight;
					}
				}

				prevLayer = currentLayer;
				timelineState._weight = timelineState._animationState.getCurrentWeight() * weigthLeft;
				weight = timelineState._weight;

				//timelineState
				if (weight && timelineState._blendEnabled)
				{
					transform = timelineState._transform;
					pivot = timelineState._pivot;
					x += transform.x * weight;
					y += transform.y * weight;
					skewX += transform.skewX * weight;
					skewY += transform.skewY * weight;
					scaleX += transform.scaleX * weight;
					scaleY += transform.scaleY * weight;
					pivotX += pivot.x * weight;
					pivotY += pivot.y * weight;
					layerTotalWeight += weight;
				}
			}

			this._tween.x = x;
			this._tween.y = y;
			this._tween.skewX = skewX;
			this._tween.skewY = skewY;
			this._tween.scaleX = scaleX;
			this._tween.scaleY = scaleY;
			this._tweenPivot.x = pivotX;
			this._tweenPivot.y = pivotY;
		}
	}
});

dragonBones.Bone.sortState = function(a, b){
	return a._animationState.getLayer() < b._animationState.getLayer() ? -1 : 1;
};

dragonBones.Slot = dragonBones.Object.extend({
	_isShowDisplay:false,
	_displayIndex:0,
	_originZOrder:0,
	_tweenZOrder:0,
	_offsetZOrder:0,
	_blendMode:null,
	
	_colorTransform:null,

	_displayList:null,

	_slotData:null,
	_display:null,
	_childArmature:null,
	
	ctor:function(slotData){
		dragonBones.Object.prototype.ctor.call(this);
		
		this._displayIndex = -1;
		this._blendMode = dragonBones.BlendMode.BM_NORMAL;
		
		this._slotData = slotData;
		this._childArmature = null;
		this._display = null;
		this.inheritRotation = true;
		this.inheritScale = true;
		
		this._displayList = [];
		this._colorTransform = new dragonBones.ColorTransform();
	},
	
	dispose:function()
	{
		dragonBones.Object.prototype.dispose.call(this);
		this._displayList.length = 0;
		this._slotData = null;
		this._childArmature = null;
		this._display = null;
	},
	
	getBoundingBox:function(){},
	
	getDisplayIndex:function(){
		return this._displayIndex;
	},
	
	isShowDisplay:function(){ 
		return this._isShowDisplay;
	},
	
	getSlotData:function(){
		return this._slotData;
	},

	getZOrder:function(){
		return this._originZOrder + this._tweenZOrder + this._offsetZOrder;
	},
	
	setZOrder:function(zorder){
		if (this.getZOrder() != zorder){
			this._offsetZOrder = zorder - this._originZOrder - this._tweenZOrder;

			if(this._armature){
				this._armature._slotsZOrderChanged = true;
			}
		}
	},
	
	getDisplay:function(){
		return this._display;
	},
	
	setDisplay:function(display, displayType, disposeExisting){
		if(displayType === undefined){ displayType = dragonBones.DisplayType.DT_IMAGE; }
		if(disposeExisting === undefined){ disposeExisting = true; }
		
		if (this._displayIndex < 0){
			this._isShowDisplay = true;
			this._displayIndex = 0;
		}
		
		if (this._displayList[this._displayIndex] == display){
			return;
		}

		this._displayList[this._displayIndex] = display;
		this.updateSlotDisplay(disposeExisting);
	},
	
	getChildArmature:function(){
		return this._childArmature;
	},
	
	setChildArmature:function(childArmature, disposeExisting){
		if(disposeExisting === undefined){ disposeExisting = true; }
		this.setDisplay(childArmature, dragonBones.DisplayType.DT_ARMATURE, disposeExisting);
	},
	
	getDisplayList:function(){
		return this._displayList;
	},
	
	setDisplayList:function(displayList, disposeExisting){
		if(disposeExisting === undefined){ disposeExisting = true; }
		
		if (this._displayIndex < 0){
			this._isShowDisplay = true;
            this._displayIndex = 0;
		}

		if (disposeExisting){
			this.disposeDisplayList();
			this._childArmature = null;
			this._display = null;
		}

		// copy
		this._displayList = displayList;
		var displayIndexBackup = this._displayIndex;
		this._displayIndex = -1;
		this.changeDisplay(displayIndexBackup);
	},

	setVisible:function(vislble){
		if (this._visible != visible){
			this._visible = visible;
			this.updateDisplayVisible(this._visible);
		}
	},
	
	update:function(){
		if(this._parent._needUpdate <= 0){
			return;
		}

		var x = this.origin.x + this.offset.x + this._parent._tweenPivot.x;
		var y = this.origin.y + this.offset.y + this._parent._tweenPivot.y;
		parentMatrix = this._parent.globalTransformMatrix;
		this.globalTransformMatrix.tx = this.global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
		this.globalTransformMatrix.ty = this.global.y = parentMatrix.d * y + parentMatrix.b * x + parentMatrix.ty;
		//globalTransformMatrix.tx = global.x = parentMatrix.a * x * _parent.global.scaleX + parentMatrix.c * y * _parent.global.scaleY + parentMatrix.tx;
		//globalTransformMatrix.ty = global.y = parentMatrix.d * y * _parent.global.scaleY + parentMatrix.b * x * _parent.global.scaleX + parentMatrix.ty;

		if (this.inheritRotation)
		{
			this.global.skewX = this.origin.skewX + this.offset.skewX + this._parent.global.skewX;
			this.global.skewY = this.origin.skewY + this.offset.skewY + this._parent.global.skewY;
		}
		else
		{
			this.global.skewX = this.origin.skewX + this.offset.skewX;
			this.global.skewY = this.origin.skewY + this.offset.skewY;
		}

		if (this.inheritScale)
		{
			this.global.scaleX = this.origin.scaleX * this.offset.scaleX * this._parent.global.scaleX;
			this.global.scaleY = this.origin.scaleY * this.offset.scaleY * this._parent.global.scaleY;
		}
		else
		{
			this.global.scaleX = this.origin.scaleX * this.offset.scaleX;
			this.global.scaleY = this.origin.scaleY * this.offset.scaleY;
		}

		this.globalTransformMatrix.a = this.global.scaleX * Math.cos(this.global.skewY);
		this.globalTransformMatrix.b = this.global.scaleX * Math.sin(this.global.skewY);
		this.globalTransformMatrix.c = -this.global.scaleY * Math.sin(this.global.skewX);
		this.globalTransformMatrix.d = this.global.scaleY * Math.cos(this.global.skewX);
		this.updateDisplayTransform();
	},
	
	changeDisplay:function(displayIndex){
		if (displayIndex < 0){
			if (this._isShowDisplay){
				this._isShowDisplay = false;
				this.removeDisplayFromContainer();
				this.updateChildArmatureAnimation();
			}
		}else if (this._displayList.length > 0){
			if (displayIndex >= this._displayList.length){
				displayIndex = this._displayList.length - 1;
			}

			if (this._displayIndex != displayIndex){
				this._isShowDisplay = true;
				this._displayIndex = displayIndex;
				this.updateSlotDisplay(false);

				if (
						this._slotData &&
						this._slotData.displayDataList.length > 0 &&
						this._displayIndex < this._slotData.displayDataList.length
				){
					this.origin = this._slotData.displayDataList[this._displayIndex].transform;
				}
			}else if (!this._isShowDisplay){
				this._isShowDisplay = true;

				if(this._armature){
					this._armature._slotsZOrderChanged = true;
					this.addDisplayToContainer(this._armature, -1);
				}

				this.updateChildArmatureAnimation();
			}
		}
	},
	updateSlotDisplay:function(disposeExisting){
		var currentDisplayIndex = -1;

		if (this._display){
			currentDisplayIndex = this.getDisplayZIndex();
			this.removeDisplayFromContainer();
		}

		if (disposeExisting){
			if (this._childArmature){
				this._childArmature.dispose();
				this._childArmature = null;
			}else if (this._display){
				this.disposeDisplay();
				this._display = null;
			}
		}
		this.stopChildArmatureAnimation();
		
		var display = this._displayList[this._displayIndex];

		if (display){
			if (display instanceof dragonBones.Armature){
				this._childArmature = display;
				this._display = this._childArmature._display;
			}else{
				this._childArmature = null;
				this._display = display;
			}
		}else{
			this._display = nullptr;
			this._childArmature = nullptr;
		}
		
		this.playChildArmatureAnimation();
		this.updateDisplay(this._display);
		
		if (this._display){
			if (this._armature && this._isShowDisplay)
			{
				if (currentDisplayIndex < 0){
					this._armature._slotsZOrderChanged = true;
					this.addDisplayToContainer(this._armature, currentDisplayIndex);
				}else{
					this.addDisplayToContainer(this._armature, currentDisplayIndex);
				}
			}

			if(this._blendMode != dragonBones.BlendMode.BM_NORMAL){
				this.updateDisplayBlendMode(this._blendMode);
			}else if (this._slotData){
				this.updateDisplayBlendMode(this._slotData.blendMode);
			}

			this.updateDisplayColor(
					this._colorTransform.alphaOffset, this._colorTransform.redOffset, this._colorTransform.greenOffset, this._colorTransform.blueOffset,
					this._colorTransform.alphaMultiplier, this._colorTransform.redMultiplier, this._colorTransform.greenMultiplier, this._colorTransform.blueMultiplier
			);
			this.updateDisplayVisible(this._visible);
			this.updateDisplayTransform();
		}
	},

	updateDisplayColor:function(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier){
		this._colorTransform.alphaOffset = aOffset;
		this._colorTransform.redOffset = rOffset;
		this._colorTransform.greenOffset = gOffset;
		this._colorTransform.blueOffset = bOffset;
		this._colorTransform.alphaMultiplier = aMultiplier;
		this._colorTransform.redMultiplier = rMultiplier;
		this._colorTransform.greenMultiplier = gMultiplier;
		this._colorTransform.blueMultiplier = bMultiplier;
	},
	
	updateChildArmatureAnimation:function(){
		if (this._isShowDisplay){
			this.playChildArmatureAnimation();
		}else{
			this.stopChildArmatureAnimation();
		}
	},
	
	playChildArmatureAnimation:function(){
		if (this._childArmature && this._childArmature._isInheritAnimation)
		{
			if(
					this._armature &&
					this._armature._animation._lastAnimationState &&
					this._childArmature._animation.hasAnimation(_armature._animation._lastAnimationState.name)
			){
				this._childArmature._animation.gotoAndPlay(this._armature._animation._lastAnimationState.name);
			}else{
				this._childArmature._animation.play();
			}
		}
	},
	
	stopChildArmatureAnimation:function(){
		if (this._childArmature){
			this._childArmature._animation.stop();
			this._childArmature._animation._lastAnimationState = null;
		}
	},

	getDisplayZIndex:function(){},
	addDisplayToContainer:function(container, zIndex){},
	removeDisplayFromContainer:function(){},
	disposeDisplay:function(){},
	disposeDisplayList:function(){},
	updateDisplay:function(display){},
	updateDisplayBlendMode:function(blendMode){},
	updateDisplayVisible:function(visible){},
	updateDisplayTransform:function(){},
	
	/** @protected */
	setArmature:function(armature){
		dragonBones.Object.prototype.setArmature.call(this, armature);
		if (this._armature){
			this._armature._slotsZOrderChanged = true;
			this.addDisplayToContainer(this._armature, -1);
		}else{
			this.removeDisplayFromContainer();
		}
	}
});

/*----------------------------------------------------------------------core部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------event部分---------------------------------------------------------------*/
dragonBones.EventData = cc.Class.extend({
	frameLabel:null,
	sound:null,

	armature:null,
	bone:null,
	animationState:null,
	frame:null,
	
	_type:0,
	
	ctor:function(type, armatureTarget){//函数重载
		if(type === undefined) { type = dragonBones.EventType._ERROR; }
		if(armatureTarget === undefined) { armatureTarget = null; }
		this._type = type;
		this.armature = armatureTarget;
	},
	
	getType:function(){
		return this._type;
	},
	
	getStringType:function(){
		return dragonBones.EventData.typeToString(this._type);
	},
	
	clear:function(){
		this.armature = null;
		this.bone = null;
		this.animationState = null;
		this.frame = null;
		this.frameLabel = null;
		this.sound = null;
	},
	
	copy:function(copyData){
		this._type = copyData._type;
		this.frameLabel = copyData.frameLabel;
		this.sound = copyData.sound;
		this.armature = copyData.armature;
		this.bone = copyData.bone;
		this.animationState = copyData.animationState;
		this.frame = copyData.frame;
	}
});

dragonBones.EventData.Z_ORDER_UPDATED = "zorderUpdate";
dragonBones.EventData.ANIMATION_FRAME_EVENT = "animationFrameEvent";
dragonBones.EventData.BONE_FRAME_EVENT = "boneFrameEvent";
dragonBones.EventData.SOUND = "sound";
dragonBones.EventData.FADE_IN = "fadeIn";
dragonBones.EventData.FADE_OUT = "fadeOut";
dragonBones.EventData.START = "start";
dragonBones.EventData.COMPLETE = "complete";
dragonBones.EventData.LOOP_COMPLETE = "loopComplete";
dragonBones.EventData.FADE_IN_COMPLETE = "fadeInComplete";
dragonBones.EventData.FADE_OUT_COMPLETE = "fadeOutComplete";
dragonBones.EventData._ERROR = "error";

var DBEventDataPool = [];
dragonBones.EventData._pool = DBEventDataPool;
dragonBones.EventData.typeToString = function(eventType){
	switch (eventType)
	{
	case dragonBones.EventType.Z_ORDER_UPDATED:
		return dragonBones.EventData.Z_ORDER_UPDATED;
	case dragonBones.EventType.ANIMATION_FRAME_EVENT:
		return dragonBones.EventData.ANIMATION_FRAME_EVENT;
	case dragonBones.EventType.BONE_FRAME_EVENT:
		return dragonBones.EventData.BONE_FRAME_EVENT;
	case dragonBones.EventType.SOUND:
		return dragonBones.EventData.SOUND;
	case dragonBones.EventType.FADE_IN:
		return dragonBones.EventData.FADE_IN;
	case dragonBones.EventType.FADE_OUT:
		return dragonBones.EventData.FADE_OUT;
	case dragonBones.EventType.START:
		return dragonBones.EventData.START;
	case dragonBones.EventType.COMPLETE:
		return dragonBones.EventData.COMPLETE;
	case dragonBones.EventType.LOOP_COMPLETE:
		return dragonBones.EventData.LOOP_COMPLETE;
	case dragonBones.EventType.FADE_IN_COMPLETE:
		return dragonBones.EventData.FADE_IN_COMPLETE;
	case dragonBones.EventType.FADE_OUT_COMPLETE:
		return dragonBones.EventData.FADE_OUT_COMPLETE;
	default:
		break;
	}
	// throw
	return dragonBones.EventData._ERROR;
};

dragonBones.EventData.borrowObject = function(eventType){
	if (DBEventDataPool.length == 0){
		return new dragonBones.EventData(eventType, null);
	}
	var eventData = DBEventDataPool.pop();
	eventData._type = eventType;
	return eventData;
};

dragonBones.EventData.returnObject = function(eventData){
	if(DBEventDataPool.indexOf(eventData) < 0){
		DBEventDataPool.push(eventData);
	}
	eventData.clear();
};

dragonBones.EventData.clearObjects = function(){
	var i = DBEventDataPool.length;
	while (--i >= 0) {
		DBEventDataPool[i].clear();
	}
	DBEventDataPool.length = 0;
};
/*----------------------------------------------------------------------event部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------factories部分---------------------------------------------------------------*/
dragonBones.BaseFactory = cc.Class.extend({
	autoSearchDragonBonesData:false,
	autoSearchTexture:false,
	
	_dragonBonesDataMap:null,
	_textureAtlasMap:null,
	
	_currentDragonBonesDataName:null,
	_currentTextureAtlasName:null,
	
	ctor:function(){
		this._dragonBonesDataMap = {};
		this._textureAtlasMap = {};
	},
	
	dispose:function(disposeData){
		if(disposeData === undefined){ disposeData = true; }
		
		if (disposeData){
			var key;
			for(key in this._dragonBonesDataMap){
				this._dragonBonesDataMap[key].dispose();
			}

			for(key in this._textureAtlasMap){
				this._textureAtlasMap[key].dispose();
			}
		}

		this._dragonBonesDataMap = null;
		this._textureAtlasMap = null;
	},
	
	getDragonBonesDataMap:function(){
		return this._dragonBonesDataMap;
	},
	
	getTextureAtlasMap:function(){
		return this._textureAtlasMap;
	},
	
	getDragonBonesData:function(name){
		return this._dragonBonesDataMap[name];
	},
	
	addDragonBonesData:function(data, name){
		if(name === undefined){ name = null; }
		
		if(!data){
			throw new Error();
		}
		
		name = name || data.name;
		if(!name){
			throw new Error("Unnamed data!");
		}
		
		if(this._dragonBonesDataMap[name]){
			throw new Error();
		}
		
		this._dragonBonesDataMap[name] = data;
	},
	
	removeDragonBonesData:function(name, disposeData){
		if(disposeData === undefined){ disposeData = true; }
		
		var data = this._dragonBonesDataMap[name];
		if(data){
			if(disposeData){
				data.dispose();
			}
			delete this._dragonBonesDataMap[name];
			data = null;
		}
	},
	
	getTextureAtlas:function(name){
		return this._textureAtlasMap[name];
	},
	
	addTextureAtlas:function(textureAtlas, name){
		if(name === undefined){ name = ""; }

		var key = name == "" ? textureAtlas.textureAtlasData.name : name;
		
		if(!key){
			throw new Error();
		}
		
		if(this._textureAtlasMap[key]){
			throw new Error();
		}

		this._textureAtlasMap[key] = textureAtlas;
	},
	
	removeTextureAtlas:function(name, disposeData){
		if(disposeData === undefined){ disposeData = true; }
		
		var data = this._textureAtlasMap[name];
		if(data){
			if(disposeData){
				data.dispose();
			}
			delete this._textureAtlasMap[name];
			data = null;
		}
	},
	
	buildArmature:function(armatureName, skinName, animationName, dragonBonesName, textureAtlasName){
		if(skinName === undefined){ skinName = null; }
		if(animationName === undefined){ animationName = null; }
		if(dragonBonesName === undefined){ dragonBonesName = null; }
		if(textureAtlasName === undefined){ textureAtlasName = null; }
		
		
		var dragonBonesData = null;
		var armatureData = null;
		var animationArmatureData = null;
		var skinData = null;
		var skinDataCopy = null;
		var key;
		
		if(dragonBonesName){
			dragonBonesData = this._dragonBonesDataMap[dragonBonesName];
			if(dragonBonesData){
				armatureData = dragonBonesData.getArmatureData(armatureName);
				this._currentDragonBonesDataName = dragonBonesName;
				this._currentTextureAtlasName = textureAtlasName == null ? this._currentDragonBonesDataName : textureAtlasName;
			}
		}
		
		if (!armatureData){
			var searchType = (dragonBonesName == null ? dragonBones.AutoSearchType.AST_ALL : (this.autoSearchDragonBonesData ? dragonBones.AutoSearchType.AST_AUTO : dragonBones.AutoSearchType.AST_NONE));

			if (searchType != dragonBones.AutoSearchType.AST_NONE)
			{
				for(key in this._dragonBonesDataMap){
					dragonBonesData = this._dragonBonesDataMap[key];
					if (searchType == dragonBones.AutoSearchType.AST_ALL || dragonBonesData.autoSearch){
						armatureData = dragonBonesData.getArmatureData(armatureName);

						if(armatureData){
							this._currentDragonBonesDataName = key;
							this._currentTextureAtlasName = this._currentDragonBonesDataName;
							break;
						}
					}
				}
			}
		}
		
		if (!armatureData){
			return null;
		}
		
		if(animationName && animationName != armatureName){
			animationArmatureData = dragonBonesData.getArmatureData(animationName);
			if (!animationArmatureData)
			{
				for(key in this._dragonBonesDataMap){
					dragonBonesData = this._dragonBonesDataMap[key];
					animationArmatureData = dragonBonesData.getArmatureData(animationName);
					if (animationArmatureData){
						break;
					}
				}
			}

			if(animationArmatureData){
				skinDataCopy = animationArmatureData.getSkinData("");
			}
		}
		
		skinData = armatureData.getSkinData(skinName);
		var armature = this.generateArmature(armatureData);
		armature.name = armatureName;

		if (animationArmatureData){
			armature.getAnimation().setAnimationDataList(animationArmatureData.animationDataList);
		}else{
			armature.getAnimation().setAnimationDataList(armatureData.animationDataList);
		}
		
		this.buildBones(armature, armatureData);

		if (skinData){
			this.buildSlots(armature, armatureData, skinData, skinDataCopy);
		}

		// update armature pose
		armature.getAnimation().play();
		armature.advanceTime(0);
		armature.getAnimation().stop();
		
		return armature;
	},
	
	getTextureDisplay:function(textureName, textureAtlasName, displayData){
		if(textureAtlasName === undefined){ textureAtlasName = null; }
		if(displayData === undefined){ displayData = null; }
		
		var textureAtlas = null;
		var textureData = null;
		var key;
		
		if (textureAtlasName)
		{
			textureAtlas = this._textureAtlasMap[textureAtlasName];
			if (textureAtlas){
				textureData = textureAtlas.textureAtlasData.getTextureData(textureName);
			}
		}
		
		if (!textureData){
			var searchType = (textureAtlasName == null ? dragonBones.AutoSearchType.AST_ALL : (autoSearchTexture ? dragonBones.AutoSearchType.AST_AUTO : dragonBones.AutoSearchType.AST_NONE));

			if (searchType != dragonBones.AutoSearchType.AST_NONE){
				for(key in this._textureAtlasMap){
					textureAtlas = this._textureAtlasMap[key];
					
					if (searchType == dragonBones.AutoSearchType.AST_ALL || textureAtlas.textureAtlasData.autoSearch){
						textureData = textureAtlas.textureAtlasData.getTextureData(textureName);
						if (textureData){
							break;
						}
					}
				}
			}
		}
		
		if (!textureData){
			return null;
		}
		
		if(!displayData)
		{
			var data = this._dragonBonesDataMap[textureAtlas.textureAtlasData.name];
			if (data)
			{
				var dragonBonesData = data;

				for (var i = 0, l1 = dragonBonesData.armatureDataList.length; i < l1; ++i)
				{
					for (var j = 0, l2 = dragonBonesData.armatureDataList[i].skinDataList.length; j < l2; ++j)
					{
						for (var k = 0, l3 = dragonBonesData.armatureDataList[i].skinDataList[j].slotDataList.length; k < l3; ++k)
						{
							for (var m = 0, l4 = dragonBonesData.armatureDataList[i].skinDataList[j].slotDataList[k].displayDataList.length; m < l4; ++m)
							{
								displayData = dragonBonesData.armatureDataList[i].skinDataList[j].slotDataList[k].displayDataList[m];

								if (displayData.name != textureName)
								{
									displayData = nullptr;
								}
								else
								{
									break;
								}
							}

							if (displayData)
							{
								break;
							}
						}

						if (displayData)
						{
							break;
						}
					}

					if (displayData)
					{
						break;
					}
				}
			}
		}

		return this.generateDisplay(textureAtlas, textureData, displayData);
	},
	
	buildBones:function(armature, armatureData){
		var boneData;
		var bone;
		for (var i = 0, l = armatureData.boneDataList.length; i < l; ++i)
		{
			boneData = armatureData.boneDataList[i];
			bone = new dragonBones.Bone();
			bone.name = boneData.name;
			bone.inheritRotation = boneData.inheritRotation;
			bone.inheritScale = boneData.inheritScale;
			// copy
			bone.origin = boneData.transform;

			if (armatureData.getBoneData(boneData.parent)){
				armature.addBone(bone, boneData.parent);
			}else{
				armature.addBone(bone);
			}
		}
	},
	
	buildSlots:function(armature, armatureData, skinData, skinDataCopy){
		var slotData;
		var bone;
		var slot;
		var displayList;
		var frameDisplay;
		
		for (var i = 0, l1 = skinData.slotDataList.length; i < l1; ++i){
			slotData = skinData.slotDataList[i];
			bone = armature.getBone(slotData.parent);

			if (!bone){
				continue;
			}

			slot = this.generateSlot(slotData);
			slot.name = slotData.name;
			slot._originZOrder = slotData.zOrder;
			slot._slotData = slotData;
			
			displayList = [];
			frameDisplay = null;

			for (var j = 0, l2 = slotData.displayDataList.length; j < l2; ++j)
			{
				var displayData = slotData.displayDataList[j];

				switch (displayData.type)
				{
				case dragonBones.DisplayType.DT_ARMATURE:
				{
					var displayDataCopy = null;

					if (skinDataCopy){
						var slotDataCopy = skinDataCopy.getSlotData(slotData.name);
						if (slotDataCopy){
							displayDataCopy = slotDataCopy.displayDataList[i];
						}
					}
					
					var currentDragonBonesDataName = this._currentDragonBonesDataName;
					var currentTextureAtlasName = this._currentTextureAtlasName;
					var childArmature = this.buildArmature(displayData.name, "", displayDataCopy ? displayDataCopy.name : "", currentDragonBonesDataName, currentTextureAtlasName);
					displayList.push(childArmature);
					this._currentDragonBonesDataName = currentDragonBonesDataName;
					this._currentTextureAtlasName = currentTextureAtlasName;
					break;
				}

				case dragonBones.DisplayType.DT_IMAGE:
				{
					var display = this.getTextureDisplay(displayData.name, this._currentTextureAtlasName, displayData);
					displayList.push(display);
					break;
				}

				/*
	                case dragonBones.DisplayType.DT_FRAME:
	                {
	                    break;
	                }

	                case dragonBones.DisplayType.DT_TEXT:
	                {
	                    break;
	                }
				 */

				default:
					displayList.push(null);
					break;
				}
			}

			bone.addChild(slot);

			if (displayList.length > 0){
				slot.setDisplayList(displayList, false);
			}
		}
	},

	generateArmature:function(armatureData){},
	generateSlot:function(slotData){},
	generateDisplay:function(textureAtlas, textureData, displayData){}
	
});

/*----------------------------------------------------------------------factories部分---------------------------------------------------------------*/


/*----------------------------------------------------------------------geoms部分---------------------------------------------------------------*/
dragonBones.ColorTransform = cc.Class.extend({
	alphaMultiplier:1,
	redMultiplier:1,
	greenMultiplier:1,
	blueMultiplier:1,

	alphaOffset:0,
	redOffset:0,
	greenOffset:0,
	blueOffset:0,

	ator:function(){}
});

dragonBones.Point = cc.Class.extend({
	x:0,
	y:0,

	ctor:function(){}
});

dragonBones.Matrix = cc.Class.extend({
	a:0,
	b:0,
	c:0,
	d:0,
	tx:0,
	ty:0,

	ctor:function(){},

	invert:function(){
		var a0 = this.a;
		var b0 = this.b;
		var c0 = this.c;
		var d0 = this.d;
		var tx0 = this.tx;
		var ty0 = this.ty;
		var determinant = 1 / (a0 * d0 - b0 * c0);

		this.a = determinant * d0;
		this.b = -determinant * b0;
		this.c = -determinant * c0;
		this.d = determinant * a0;
		this.tx = determinant * (c0 * ty0 - d0 * tx0);
		this.ty = determinant * (b0 * tx0 - a0 * ty0);
	},

	transformPoint:function(point)
	{
		var x = point.x;
		var y = point.y;
		point.x = this.a * x + this.c * y + this.tx;
		point.y = this.d * y + this.b * x + this.ty;
	}
});

dragonBones.Rectangle = cc.Class.extend({
	x:0,
	y:0,
	width:0,
	height:0,

	ctor:function(x, y, width, height){
		if (x === undefined) { x = 0; }
		if (y === undefined) { y = 0; }
		if (width === undefined) { width = 0; }
		if (height === undefined) { height = 0; }
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
});

dragonBones.Transform = cc.Class.extend({
	x:0,
	y:0,
	skewX:0,
	skewY:0,
	scaleX:1,
	scaleY:1,

	ctor:function(){},

	getRotation:function()
	{
		return this.skewX;
	},

	setRotation:function(value)
	{
		this.skewX = this.skewY = value;
	},
	
	copy:function(transform){
		this.x = transform.x;
		this.y = transform.y;
		this.skewX = transform.skewX;
		this.skewY = transform.skewY;
		this.scaleX = transform.scaleX;
		this.scaleY = transform.scaleY;
	},

	toMatrix:function(matrix, keepScale)
	{
		if (keepScale === undefined) keepScale = false;
		if (keepScale)
		{
			matrix.a = this.scaleX * Math.cos(this.skewY);
			matrix.b = this.scaleX * Math.sin(this.skewY);
			matrix.c = -this.scaleY * Math.sin(this.skewX);
			matrix.d = this.scaleY * Math.cos(this.skewX);
		}
		else
		{
			matrix.a = Math.cos(this.skewY);
			matrix.b = Math.sin(this.skewY);
			matrix.c = -Math.sin(this.skewX);
			matrix.d = Math.cos(this.skewX);
		}

		matrix.tx = this.x;
		matrix.ty = this.y;
	},

	/**
	 * @function
	 * @param {dragonBones.Transform}.
	 */
	transformWith:function(parent)
	{
		var matrix = new dragonBones.Matrix();
		parent.toMatrix(matrix, true);
		matrix.invert();
		var x0 = this.x;
		var y0 = this.y;
		this.x = matrix.a * x0 + matrix.c * y0 + matrix.tx;
		this.y = matrix.d * y0 + matrix.b * x0 + matrix.ty;
		this.skewX = DBUtils.TransformUtil.formatRadian(this.skewX - parent.skewX);
		this.skewY = DBUtils.TransformUtil.formatRadian(this.skewY - parent.skewY);
	}
});
/*----------------------------------------------------------------------geoms部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------objects部分---------------------------------------------------------------*/
dragonBones.Timeline = cc.Class.extend({
	duration:0,
	scale:0,
	frameList:null,

	ctor:function(){
		this.duration = 0;
		this.scale = 1;
		this.frameList = [];
	},

	dispose:function(){
		var i = this.frameList.length;
		while (i--) {
			this.frameList[i].dispose();
		}
		this.frameList.length = 0;
		this.frameList = null;
	}
});

dragonBones.AnimationData = dragonBones.Timeline.extend({
	autoTween:false,
	frameRate:0,
	playTimes:0,
	fadeTime:0,
	// use frame tweenEase, NaN
	// overwrite frame tweenEase, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
	tweenEasing:0,

	name:null,
	timelineList:null,
	hideTimelineList:null,

	ctor:function(){
		dragonBones.Timeline.prototype.ctor.call(this);
		this.frameRate = 30;
		this.playTimes = 1;
		this.tweenEasing = dragonBones.USE_FRAME_TWEEN_EASING;

		this.timelineList = [];
		this.hideTimelineList = [];
	},

	getTimeline:function (timelineName) {
		for (var i = 0, l = this.timelineList.length; i < l; ++i){
			if (this.timelineList[i].name == timelineName){
				return this.timelineList[i];
			}
		}
		return null;
	},

	dispose:function(){
		dragonBones.Timeline.prototype.dispose.call(this);

		for (var timelineName in this.timelineList) {
			(this.timelineList[timelineName]).dispose();
		}
		this.timelineList = null;
	}
});

dragonBones.ArmatureData = cc.Class.extend({
	boneDataList:null,
	skinDataList:null,
	animationDataList:null,
	//（DB#1）缺少碰撞数据

	ctor:function(){
		this.boneDataList = [];
		this.skinDataList = [];
		this.animationDataList = [];
	},

	dispose:function(){
		var i = this.boneDataList.length;
		while (i--) {
			this.boneDataList[i].dispose();
		}
		i = this.skinDataList.length;
		while (i--) {
			this.skinDataList[i].dispose();
		}
		i = this.animationDataList.length;
		while (i--) {
			this.animationDataList[i].dispose();
		}
		this.boneDataList.length = 0;
		this.skinDataList.length = 0;
		this.animationDataList.length = 0;
		this.boneDataList = null;
		this.skinDataList = null;
		this.animationDataList = null;
	},

	getBoneData:function (boneName) {
		var i = this.boneDataList.length;
		while (i--) {
			if (this.boneDataList[i].name == boneName) {
				return this.boneDataList[i];
			}
		}
		return null;
	},

	getSkinData:function (skinName) {
		if (!skinName) {
			return this.skinDataList[0];
		}
		var i = this.skinDataList.length;
		while (i--) {
			if (this.skinDataList[i].name == skinName) {
				return this.skinDataList[i];
			}
		}
		return null;
	},

	getAnimationData:function (animationName) {
		var i = this.animationDataList.length;
		while (i--) {
			if (this.animationDataList[i].name == animationName) {
				return this.animationDataList[i];
			}
		}
		return null;
	},

	addBoneData:function (boneData) {
		if (!boneData) {
			throw new Error();
		}

		if (this.boneDataList.indexOf(boneData) < 0) {
			this.boneDataList[this.boneDataList.length] = boneData;
		} else {
			throw new Error();
		}
	},

	addSkinData:function (skinData) {
		if (!skinData) {
			throw new Error();
		}

		if (this.skinDataList.indexOf(skinData) < 0) {
			this.skinDataList[this.skinDataList.length] = skinData;
		} else {
			throw new Error();
		}
	},

	addAnimationData:function (animationData) {
		if (!animationData) {
			throw new Error();
		}

		if (this.animationDataList.indexOf(animationData) < 0) {
			this.animationDataList[this.animationDataList.length] = animationData;
		}
	},

	sortBoneDataList:function () {
		var i = this.boneDataList.length;
		if (i == 0) {
			return;
		}

		var helpArray = [];
		while (i--) {
			var boneData = this.boneDataList[i];
			var level = 0;
			var parentData = boneData;
			while (parentData && parentData.parent) {
				level++;
				parentData = this.getBoneData(parentData.parent);
			}
			helpArray[i] = { level: level, boneData: boneData };
		}

		helpArray.sort(this.sortBoneData);

		i = helpArray.length;
		while (i--) {
			this.boneDataList[i] = helpArray[i].boneData;
		}
	},

	sortBoneData:function (object1, object2) {
		return object1.level > object2.level ? 1 : -1;
	}
});

dragonBones.BoneData = cc.Class.extend({
	name:null,
	parent:null,
	length:0,

	global:null,
	transform:null,

	inheritScale:false,
	inheritRotation:false,
	//（DB#1）缺少碰撞数据

	ctor:function(){
		this.length = 0;
		this.global = new dragonBones.Transform();
		this.transform = new dragonBones.Transform();
		this.inheritRotation = true;
	},

	dispose:function(){
		this.global = null;
		this.transform = null;
	}
});

dragonBones.DisplayData = cc.Class.extend({
	name:null,
	type:null,
	transform:null,
	pivot:null,

	ctor:function(){
		this.transform = new dragonBones.Transform();
		this.pivot = new dragonBones.Point();
	},

	dispose:function(){
		this.transform = null;
		this.pivot = null;
	}
});


dragonBones.DragonBonesData = cc.Class.extend({
	autoSearch:false,
	name:null,
	armatureDataList:null,

	ctor:function(){
		this.armatureDataList = [];
	},

	dispose:function(){
		var i = this.armatureDataList.length;
		while (i--) {
			this.armatureDataList[i].dispose();
		}
		this.armatureDataList.length = 0;
		this.armatureDataList = null;
	},

	getArmatureData:function(armatureName){
		var i = this.armatureDataList.length;
		while (i--) {
			if (this.armatureDataList[i].name == armatureName) {
				return this.armatureDataList[i];
			}
		}
		return null;
	}
});

dragonBones.Frame = cc.Class.extend(/** @lends dragonBones.Frame# */{
	position:0,
	duration:0,
	frameType:null,
	action:null,
	event:null,
	sound:null,
	eventParameters:null,
	eventParametersParsed:null,

	ctor: function(){
		this.frameType = dragonBones.FT_FRAME;
	},

	dispose: function(){
		if(this.eventParametersParsed != null) this.eventParametersParsed = null;
	}
});

dragonBones.SkinData = cc.Class.extend({
	name:null,
	slotDataList:null,

	ctor:function(){
		this.slotDataList = [];
	},

	dispose:function () {
		var i = this.slotDataList.length;
		while (i--) {
			this.slotDataList[i].dispose();
		}
		this.slotDataList.length = 0;
		this.slotDataList = null;
	},

	getSlotData:function(slotName) {
		var i = this.slotDataList.length;
		while (i--) {
			if (this.slotDataList[i].name == slotName) {
				return this.slotDataList[i];
			}
		}
		return null;
	},

	addSlotData:function (slotData) {
		if (!slotData) {
			throw new Error();
		}

		if (this.slotDataList.indexOf(slotData) < 0) {
			this.slotDataList[this.slotDataList.length] = slotData;
		} else {
			throw new Error();
		}
	}
});

dragonBones.SlotData = cc.Class.extend({
	name:null,
	parent:null,
	zOrder:0,
	blendMode:null,
	displayDataList:null,

	ctor:function(){
		this.displayDataList = [];
	},

	dispose:function(){
		var i = this.displayDataList.length;
		while (i--) {
			this.displayDataList[i].dispose();
		}
		this.displayDataList.length = 0;
		this.displayDataList = null;
	},

	getDisplayData:function (slotName) {
		var i = this.displayDataList.length;
		while (i--) {
			if (this.displayDataList[i].name == slotName) {
				return this.displayDataList[i];
			}
		}
		return null;
	},

	addDisplayData:function (slotData) {
		if (!slotData) {
			throw new Error();
		}

		if (this.displayDataList.indexOf(slotData) < 0) {
			this.displayDataList[this.displayDataList.length] = slotData;
		} else {
			throw new Error();
		}
	}
});

dragonBones.TransformFrame = dragonBones.Frame.extend({
	visible:false,
	tweenScale:false,
	tweenRotate:0,
	displayIndex:0,
	zOrder:0,
	// NaN:no tween, 10:auto tween, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
	tweenEasing:0,

	global:null,
	transform:null,
	pivot:null,
	scaleOffset:null,
	color:null,

	ctor:function(){
		dragonBones.Frame.prototype.ctor.call(this);
		this.visible = true;
		this.tweenScale = true;
		this.tweenEasing = dragonBones.NO_TWEEN_EASING;
		this.frameType = dragonBones.FT_TRANSFORM_FRAME;

		this.global = new dragonBones.Transform();
		this.transform = new dragonBones.Transform();
		this.pivot = new dragonBones.Point();
		this.scaleOffset = new dragonBones.Point();
	},

	dispose:function(){
		dragonBones.Frame.prototype.dispose.call(this);
		this.global = null;
		this.transform = null;
		this.pivot = null;
		this.scaleOffset = null;
		this.color = null;
	}
});

dragonBones.TransformTimeline = dragonBones.Timeline.extend({
	transformed:false,
	offset:0,

	name:null,
	originTransform:null,
	originPivot:null,

	ctor:function(){
		dragonBones.Timeline.prototype.ctor.call(this);
		this.originTransform = new dragonBones.Transform();
		this.originPivot = new dragonBones.Point();
	},

	dispose:function(){
		dragonBones.Timeline.prototype.dispose.call(this);
		this.originTransform = null;
		this.originPivot = null;
	}
});
/*----------------------------------------------------------------------objects部分---------------------------------------------------------------*/


/*----------------------------------------------------------------------parsers部分---------------------------------------------------------------*/
dragonBones.BaseDataParser = cc.Class.extend({
	ctor:function(){},
	
	parseTextureAtlasData:function(rawTextureAtlasData, scale){
		if(scale === undefined){ scale = 1; }
	},
	
	parseDragonBonesData:function(rawDragonBonesData, scale){
		if(scale === undefined){ scale = 1; }
	}
});

dragonBones.BaseDataParser.transformArmatureData = function(armatureData){
	var i = armatureData.boneDataList.length;
	var boneData;
	var parentBoneData;
	while(--i >= 0){
		boneData = armatureData.boneDataList[i];
		if (boneData && boneData.parent){
			parentBoneData = armatureData.getBoneData(boneData.parent);
			if (parentBoneData){
				boneData.transform = boneData.global;
				boneData.transform.transformWith(parentBoneData.global);
			}
		}
	}
};

dragonBones.BaseDataParser.transformArmatureDataAnimations = function(armatureData){
	for(var i = 0, l = armatureData.animationDataList.length; i < l; ++i){
		dragonBones.BaseDataParser.transformAnimationData(armatureData.animationDataList[i], armatureData);
	}
};

dragonBones.BaseDataParser.transformAnimationData = function(animationData, armatureData){
	var skinData = armatureData.getSkinData(null);
	
	var boneData;
	var timeline;
	var slotData;
	var originTransform;
	var originPivot;
	var prevFrame;
	var frame;
	var dLX;
	for (var i = 0, l = armatureData.boneDataList.length; i < l; ++i){
		boneData = armatureData.boneDataList[i];
		timeline = animationData.getTimeline(boneData.name);

		if (!timeline){
			continue;
		}

		slotData = null;

		if (skinData){
			for(var j = 0, len = skinData.slotDataList.length; j < len; ++j)
			{
				slotData = skinData.slotDataList[j];
				if (slotData.parent == boneData.name){
					break;
				}
			}
		}

		originTransform = null;
		originPivot = null;
		prevFrame = null;

		for (var k = 0, l1 = timeline.frameList.length; k < l1; ++k)
		{
			frame = timeline.frameList[k];
			dragonBones.BaseDataParser.setFrameTransform(animationData, armatureData, boneData, frame);
			frame.transform.x -= boneData.transform.x;
			frame.transform.y -= boneData.transform.y;
			frame.transform.skewX -= boneData.transform.skewX;
			frame.transform.skewY -= boneData.transform.skewY;
			frame.transform.scaleX -= boneData.transform.scaleX;
			frame.transform.scaleY -= boneData.transform.scaleY;

			if (!timeline.transformed && slotData){
				frame.zOrder -= slotData.zOrder;
			}

			if (!originTransform){
				// copy
				timeline.originTransform.copy(frame.transform);
				originTransform = timeline.originTransform;
				originTransform.skewX = DBUtils.TransformUtil.formatRadian(originTransform.skewX);
				originTransform.skewY = DBUtils.TransformUtil.formatRadian(originTransform.skewY);
				
				// copy
				timeline.originPivot.x = frame.pivot.x;
				timeline.originPivot.y = frame.pivot.y;
				originPivot = timeline.originPivot;
			}

			frame.transform.x -= originTransform.x;
			frame.transform.y -= originTransform.y;
			frame.transform.skewX = DBUtils.TransformUtil.formatRadian(frame.transform.skewX - originTransform.skewX);
			frame.transform.skewY = DBUtils.TransformUtil.formatRadian(frame.transform.skewY - originTransform.skewY);
			frame.transform.scaleX -= originTransform.scaleX;
			frame.transform.scaleY -= originTransform.scaleY;

			if (!timeline.transformed){
				frame.pivot.x -= originPivot.x;
				frame.pivot.y -= originPivot.y;
			}

			if (prevFrame){
				dLX = frame.transform.skewX - prevFrame.transform.skewX;

				if (prevFrame.tweenRotate){
					if (prevFrame.tweenRotate > 0){
						if (dLX < 0){
							frame.transform.skewX += Math.PI * 2;
							frame.transform.skewY += Math.PI * 2;
						}

						if (prevFrame.tweenRotate > 1){
							frame.transform.skewX += Math.PI * 2 * (prevFrame.tweenRotate - 1);
							frame.transform.skewY += Math.PI * 2 * (prevFrame.tweenRotate - 1);
						}
					}else{
						if (dLX > 0){
							frame.transform.skewX -= Math.PI * 2;
							frame.transform.skewY -= Math.PI * 2;
						}

						if (prevFrame.tweenRotate < 1){
							frame.transform.skewX += Math.PI * 2 * (prevFrame.tweenRotate + 1);
							frame.transform.skewY += Math.PI * 2 * (prevFrame.tweenRotate + 1);
						}
					}
				}
				else{
					frame.transform.skewX = prevFrame.transform.skewX + DBUtils.TransformUtil.formatRadian(frame.transform.skewX - prevFrame.transform.skewX);
					frame.transform.skewY = prevFrame.transform.skewY + DBUtils.TransformUtil.formatRadian(frame.transform.skewY - prevFrame.transform.skewY);
				}
			}

			prevFrame = frame;
		}
		timeline.transformed = true;
	}
};

dragonBones.BaseDataParser.addHideTimeline = function(animationData, armatureData){
	var boneData;
	for (var i = 0, l = armatureData.boneDataList.length; i < l; ++i){
		boneData = armatureData.boneDataList[i];
		if (!animationData.getTimeline(boneData.name)){
			if(animationData.hideTimelineList.indexOf(boneData.name) < 0){
				animationData.hideTimelineList.push(boneData.name);
			}
		}
	}
};

dragonBones.BaseDataParser.setFrameTransform = function(animationData, armatureData, boneData, frame){
	frame.transform.copy(frame.global);
	var parentData = armatureData.getBoneData(boneData.parent);
	
	if (parentData){
		var parentTimeline = animationData.getTimeline(parentData.name);

		if (parentTimeline){
			var parentTimelineList = [];
			var parentDataList = [];

			while (parentTimeline){
				parentTimelineList.push(parentTimeline);
				parentDataList.push(parentData);
				parentData = armatureData.getBoneData(parentData.parent);

				if (parentData){
					parentTimeline = animationData.getTimeline(parentData.name);
				}else{
					parentTimeline = null;
				}
			}

			var helpMatrix = new dragonBones.Matrix();
			var currentTransform = new dragonBones.Transform();
			var globalTransform = null;

			for (var i = parentTimelineList.length; i--;)
			{
				parentTimeline = parentTimelineList[i];
				parentData = parentDataList[i];
				dragonBones.BaseDataParser.getTimelineTransform(parentTimeline, frame.position, currentTransform, !globalTransform);

				if (globalTransform){
						globalTransform.skewX += currentTransform.skewX + parentTimeline.originTransform.skewX + parentData.transform.skewX;
						globalTransform.skewY += currentTransform.skewY + parentTimeline.originTransform.skewY + parentData.transform.skewY;

						globalTransform.scaleX = currentTransform.scaleX + parentTimeline.originTransform.scaleX + parentData.transform.scaleX;
						globalTransform.scaleY = currentTransform.scaleY + parentTimeline.originTransform.scaleY + parentData.transform.scaleY;
						
						var x = currentTransform.x + parentTimeline.originTransform.x + parentData.transform.x;
						var y = currentTransform.y + parentTimeline.originTransform.y + parentData.transform.y;
						globalTransform.x = helpMatrix.a * x + helpMatrix.c * y + helpMatrix.tx;
						globalTransform.y = helpMatrix.d * y + helpMatrix.b * x + helpMatrix.ty;
				}else{
					globalTransform = new dragonBones.Transform();
					globalTransform.copy(currentTransform);
				}

				globalTransform.toMatrix(helpMatrix, true);
			}

			frame.transform.transformWith(globalTransform);
		}
	}
};

dragonBones.BaseDataParser.getTimelineTransform = function(timeline, position, retult, isGlobal){
	var currentFrame;
	var progress;
	var tweenEasing;
	for (var i = 0, l = timeline.frameList.length; i < l; ++i)
	{
		currentFrame = timeline.frameList[i];

		if (currentFrame.position <= position && currentFrame.position + currentFrame.duration > position){
			if (i == timeline.frameList.length - 1 || position == currentFrame.position){
				//copy
				retult.copy(isGlobal ? currentFrame.global : currentFrame.transform);
			}else{
				progress = (position - currentFrame.position) / currentFrame.duration;
				tweenEasing = currentFrame.tweenEasing;

				if (tweenEasing && tweenEasing != dragonBones.NO_TWEEN_EASING && tweenEasing != dragonBones.AUTO_TWEEN_EASING){
					progress = DBUtils.TransformUtil.getEaseValue(progress, tweenEasing);
				}

				var nextFrame = timeline.frameList[i + 1];
				var currentTransform = isGlobal ? currentFrame.global : currentFrame.transform;
				var nextTransform = isGlobal ? nextFrame.global : nextFrame.transform;
				retult.x = currentTransform.x + (nextTransform.x - currentTransform.x) * progress;
				retult.y = currentTransform.y + (nextTransform.y - currentTransform.y) * progress;
				retult.skewX = DBUtils.TransformUtil.formatRadian(currentTransform.skewX + (nextTransform.skewX - currentTransform.skewX) * progress);
				retult.skewY = DBUtils.TransformUtil.formatRadian(currentTransform.skewY + (nextTransform.skewY - currentTransform.skewY) * progress);
				retult.scaleX = currentTransform.scaleX + (nextTransform.scaleX - currentTransform.scaleX) * progress;
				retult.scaleY = currentTransform.scaleY + (nextTransform.scaleY - currentTransform.scaleY) * progress;
			}
			break;
		}
	}
};


dragonBones.ObjectDataParser = dragonBones.BaseDataParser.extend({
	_textureScale:0,
	_armatureScale:0,
	_frameRate:0,
	
	ctor:function(){
		dragonBones.BaseDataParser.prototype.ctor.call(this);
		this._textureScale = 1;
		this._armatureScale = 1;
		this._frameRate = 30;
	},
	
	parseTextureAtlasData:function(rawTextureAtlasData, scale){
		if(scale === undefined){ scale = 1; }
	
		this._textureScale = scale;
		var textureAtlasData = new dragonBones.TextureAtlasData();
		textureAtlasData.name = rawTextureAtlasData[DBConstValues.A_NAME];
		textureAtlasData.imagePath = rawTextureAtlasData[DBConstValues.A_IMAGE_PATH];//还差图片路径BUG #0

		var textureData;
		var subTextureList = rawTextureAtlasData[DBConstValues.SUB_TEXTURE];
		for(var key in subTextureList){
			textureData = this.parseTextureData(subTextureList[key]);
			textureAtlasData.textureDataList.push(textureData);
		}
		return textureAtlasData;
	},

	parseDragonBonesData:function(rawDragonBonesData, scale){
		if(scale === undefined){ scale = 1; }
		
		this._armatureScale = scale;
		//const XMLElement *dragonBonesXML = static_cast<const XMLElement*>(rawDragonBonesData);
		//std::string version = dragonBonesXML.Attribute(DBConstValues.A_VERSION);

		this._frameRate = this.getNumber(rawDragonBonesData, DBConstValues.A_FRAME_RATE, 0, 0);
		var dragonBonesData = new dragonBones.DragonBonesData();
		dragonBonesData.name = rawDragonBonesData[DBConstValues.A_NAME];

		var armatureData;
		var armatureList = rawDragonBonesData[DBConstValues.ARMATURE];
		for(var key in armatureList){
			armatureData = this.parseArmatureData(armatureList[key]);//存在问题
			dragonBonesData.armatureDataList.push(armatureData);
		}

		return dragonBonesData;
	},
	
	parseTextureData:function(textureXML){
		var textureData = new dragonBones.TextureData();
		textureData.name = textureXML[DBConstValues.A_NAME];
		textureData.rotated = textureXML[DBConstValues.A_ROTATED] == "true";
		textureData.region.x = this.getNumber(textureXML, DBConstValues.A_X, 0) / this._textureScale;
		textureData.region.y = this.getNumber(textureXML, DBConstValues.A_Y, 0) / this._textureScale;
		textureData.region.width = this.getNumber(textureXML, DBConstValues.A_WIDTH, 0) / this._textureScale;
		textureData.region.height = this.getNumber(textureXML, DBConstValues.A_HEIGHT, 0) / this._textureScale;
		var frameWidth = this.getNumber(textureXML, DBConstValues.A_FRAME_WIDTH, 0) / this._textureScale;
		var frameHeight = this.getNumber(textureXML, DBConstValues.A_FRAME_HEIGHT, 0) / this._textureScale;

		if (frameWidth > 0 && frameHeight > 0)
		{
			textureData.frame = new dragonBones.Rectangle();
			textureData.frame.x = this.getNumber(textureXML, DBConstValues.A_FRAME_X, 0) / this._textureScale;
			textureData.frame.y = this.getNumber(textureXML, DBConstValues.A_FRAME_Y, 0) / this._textureScale;
			textureData.frame.width = frameWidth;
			textureData.frame.height = frameHeight;
		}

		return textureData;
	},

	parseArmatureData:function(armatureXML){
		var armatureData = new dragonBones.ArmatureData();
		armatureData.name = armatureXML[DBConstValues.A_NAME];

		var key;
		
		var boneList = armatureXML[DBConstValues.BONE];
		var boneData;
		for(key in boneList){
			boneData = this.parseBoneData(boneList[key]);
			armatureData.boneDataList.push(boneData);
		}

		var skinList = armatureXML[DBConstValues.SKIN];
		var skinData;
		for(key in skinList){
			skinData = this.parseSkinData(skinList[key]);
			armatureData.skinDataList.push(skinData);
		}

		dragonBones.BaseDataParser.transformArmatureData(armatureData);
		armatureData.sortBoneDataList();

		var animationList = armatureXML[DBConstValues.ANIMATION];
		var animationData;
		for(key in animationList){
			animationData = this.parseAnimationData(animationList[key], armatureData);
			armatureData.animationDataList.push(animationData);
		}

		//不解析碰撞数据
		/*for (const XMLElement *rectangleXML = armatureXML.FirstChildElement(DBConstValues.RECTANGLE); rectangleXML; rectangleXML = rectangleXML.NextSiblingElement(DBConstValues.RECTANGLE))
		{
			RectangleData *rectangleData = parseRectangleData(rectangleXML);
			armatureData.areaDataList.push_back(rectangleData);
		}

		for (const XMLElement *ellipseXML = armatureXML.FirstChildElement(DBConstValues.ELLIPSE); ellipseXML; ellipseXML = ellipseXML.NextSiblingElement(DBConstValues.ELLIPSE))
		{
			EllipseData *ellipseData = parseEllipseData(ellipseXML);
			armatureData.areaDataList.push_back(ellipseData);
		}*/

		return armatureData;
	},
	
	parseBoneData:function(boneXML){
		var boneData = new dragonBones.BoneData();
		boneData.name = boneXML[DBConstValues.A_NAME];
		var parent = boneXML[DBConstValues.A_PARENT];
		if (parent){
			boneData.parent = parent;
		}

		boneData.length = this.getNumber(boneXML, DBConstValues.A_LENGTH, 0, 0);
		boneData.inheritRotation = this.getBoolean(boneXML, DBConstValues.A_INHERIT_ROTATION, true);
		boneData.inheritScale = this.getBoolean(boneXML, DBConstValues.A_INHERIT_SCALE, false);

		var transformXML = boneXML[DBConstValues.TRANSFORM];
		if (transformXML){
			this.parseTransform(transformXML, boneData.global);
		}
		boneData.transform.copy(boneData.global);

		//不解析碰撞数据
		/*for (const XMLElement *rectangleXML = boneXML.FirstChildElement(DBConstValues.RECTANGLE); rectangleXML; rectangleXML = rectangleXML.NextSiblingElement(DBConstValues.RECTANGLE))
		{
			RectangleData *rectangleData = parseRectangleData(rectangleXML);
			boneData.areaDataList.push_back(rectangleData);
		}

		for (const XMLElement *ellipseXML = boneXML.FirstChildElement(DBConstValues.ELLIPSE); ellipseXML; ellipseXML = ellipseXML.NextSiblingElement(DBConstValues.ELLIPSE))
		{
			EllipseData *ellipseData = parseEllipseData(ellipseXML);
			boneData.areaDataList.push_back(ellipseData);
		}*/

		return boneData;
	},
	
	parseSkinData:function(skinXML){
		var skinData = new dragonBones.SkinData();
		skinData.name = skinXML[DBConstValues.A_NAME];

		var slotList = skinXML[DBConstValues.SLOT];
		var slotData;
		for(var key in slotList){
			slotData = this.parseSlotData(slotList[key]);
			skinData.slotDataList.push(slotData);
		}

		return skinData;
	},
	
	parseSlotData:function(slotXML){
		var slotData = new dragonBones.SlotData();
		slotData.name = slotXML[DBConstValues.A_NAME];
		slotData.parent = slotXML[DBConstValues.A_PARENT];
		slotData.zOrder = this.getNumber(slotXML, DBConstValues.A_Z_ORDER, 0, 0);

		if (slotXML[DBConstValues.A_BLENDMODE]){
			slotData.blendMode = dragonBones.getBlendModeByString(slotXML[DBConstValues.A_BLENDMODE]);
		}

		var displayList = slotXML[DBConstValues.DISPLAY];
		var displayData;
		for(var key in displayList){
			displayData = this.parseDisplayData(displayList[key]);
			slotData.displayDataList.push(displayData);
		}

		return slotData;
	},
	
	parseDisplayData:function(displayXML){
		var displayData = new dragonBones.DisplayData();
		displayData.name = displayXML[DBConstValues.A_NAME];
		displayData.type = dragonBones.getDisplayTypeByString(displayXML[DBConstValues.A_TYPE]);

		var scalingGridXML = displayXML[DBConstValues.SCALING_GRID];
		if (scalingGridXML){
			displayData.scalingGrid = true;
			displayData.scalingGridLeft = this.getNumber(scalingGridXML, DBConstValues.A_LEFT, 0, 0);
			displayData.scalingGridRight = this.getNumber(scalingGridXML, DBConstValues.A_RIGHT, 0, 0);
			displayData.scalingGridTop = this.getNumber(scalingGridXML, DBConstValues.A_TOP, 0, 0);
			displayData.scalingGridBottom = this.getNumber(scalingGridXML, DBConstValues.A_BOTTOM, 0, 0);
		}else{
			displayData.scalingGrid = false;
		}

		var transformXML = displayXML[DBConstValues.TRANSFORM];
		if (transformXML){
			this.parseTransform(transformXML, displayData.transform);
			this.parsePivot(transformXML, displayData.pivot);
		}

		//不解析文本数据
		/*const XMLElement *textXML = displayXML.FirstChildElement(DBConstValues.TEXT);
		if (textXML)
		{
			displayData.textData = new TextData();
			parseTextData(*textXML, *displayData.textData);
		}*/

		return displayData;
	},
	
	parseAnimationData:function(animationXML, armatureData){
		var animationData = new dragonBones.AnimationData();
		animationData.name = animationXML[DBConstValues.A_NAME];
		animationData.frameRate = this._frameRate;
		animationData.duration = Math.round(this.getNumber(animationXML, DBConstValues.A_DURATION, 1, 1) * 1000 / this._frameRate);
		animationData.playTimes = this.getNumber(animationXML, DBConstValues.A_LOOP, 1, 1);
		animationData.fadeTime = this.getNumber(animationXML, DBConstValues.A_FADE_IN_TIME, 0, 0);
		animationData.scale = this.getNumber(animationXML, DBConstValues.A_SCALE, 1, 1);
		
		// use frame tweenEase, NaN
		// overwrite frame tweenEase, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
		animationData.tweenEasing = this.getNumber(animationXML, DBConstValues.A_TWEEN_EASING, dragonBones.USE_FRAME_TWEEN_EASING, dragonBones.USE_FRAME_TWEEN_EASING);
		animationData.autoTween = this.getBoolean(animationXML, DBConstValues.A_AUTO_TWEEN, true);

		var key;
		
		var frameObjectList = animationXML[DBConstValues.FRAME];
		var frame;
		for(key in frameObjectList){
			frame = this.parseMainFrame(frameObjectList[key]);
			animationData.frameList.push(frame);
		}

		this.parseTimeline(animationXML, animationData);
		
		var timelineObjectList = animationXML[DBConstValues.TIMELINE];
		var timeline;
		for(key in timelineObjectList){
			timeline = this.parseTransformTimeline(timelineObjectList[key], animationData.duration);
			animationData.timelineList.push(timeline);
		}

		dragonBones.BaseDataParser.addHideTimeline(animationData, armatureData);
		dragonBones.BaseDataParser.transformAnimationData(animationData, armatureData);
		return animationData;
	},
	
	parseTransformTimeline:function(timelineXML, duration){
		var timeline = new dragonBones.TransformTimeline();
		timeline.name = timelineXML[DBConstValues.A_NAME];
		timeline.scale = this.getNumber(timelineXML, DBConstValues.A_SCALE, 1, 0);
		timeline.offset = this.getNumber(timelineXML, DBConstValues.A_OFFSET, 0, 0);
		timeline.duration = duration;
		
		var frameList = timelineXML[DBConstValues.FRAME];
		var frame;
		for(var key in frameList){
			frame = this.parseTransformFrame(frameList[key]);
			timeline.frameList.push(frame);
		}
		
		this.parseTimeline(timelineXML, timeline);
		return timeline;
	},
	
	parseMainFrame:function(frameXML){
		var frame = new dragonBones.Frame();
		this.parseFrame(frameXML, frame);
		return frame;
	},
	
	parseTransformFrame:function(frameXML){
		var frame = new dragonBones.TransformFrame();
		this.parseFrame(frameXML, frame);

		frame.visible = !this.getBoolean(frameXML, DBConstValues.A_HIDE, false);
		// NaN:no tween, 10:auto tween, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
		frame.tweenEasing = this.getNumber(frameXML, DBConstValues.A_TWEEN_EASING, dragonBones.AUTO_TWEEN_EASING, dragonBones.NO_TWEEN_EASING);
		frame.tweenRotate = Math.floor(this.getNumber(frameXML, DBConstValues.A_TWEEN_ROTATE, 0, 0));
		frame.tweenScale = this.getBoolean(frameXML, DBConstValues.A_TWEEN_SCALE, true);
		frame.displayIndex = this.getNumber(frameXML, DBConstValues.A_DISPLAY_INDEX, 0, 0);
		frame.zOrder = this.getNumber(frameXML, DBConstValues.A_Z_ORDER, 0, 0);

		var transformXML = frameXML[DBConstValues.TRANSFORM];
		if (transformXML){
			this.parseTransform(transformXML, frame.global);
			this.parsePivot(transformXML, frame.pivot);
		}

		// copy
		frame.transform.copy(frame.global);
		frame.scaleOffset.x = this.getNumber(frameXML, DBConstValues.A_SCALE_X_OFFSET, 0, 0);
		frame.scaleOffset.y = this.getNumber(frameXML, DBConstValues.A_SCALE_Y_OFFSET, 0, 0);

		var colorTransformXML = frameXML[DBConstValues.COLOR_TRANSFORM];
		if (colorTransformXML){
			frame.color = new dragonBones.ColorTransform();
			this.parseColorTransform(colorTransformXML, frame.color);
		}

		return frame;
	},
	
	parseRectangleData:function(rectangleXML){
		/*RectangleData *rectangleData = new RectangleData();
		rectangleData.name = rectangleXML.Attribute(DBConstValues.A_NAME);
		rectangleData.width = rectangleXML.FloatAttribute(DBConstValues.A_WIDTH);
		rectangleData.height = rectangleXML.FloatAttribute(DBConstValues.A_HEIGHT);

		const XMLElement *transformXML = rectangleXML.FirstChildElement(DBConstValues.TRANSFORM);
		if (transformXML)
		{
			parseTransform(*transformXML, rectangleData.transform);
			parsePivot(*transformXML, rectangleData.pivot);
		}

		return rectangleData;*/
		return null;
	},
	
	parseEllipseData:function(ellipseXML){
		/*EllipseData *ellipseData = new EllipseData();
		ellipseData.name = ellipseXML.Attribute(DBConstValues.A_NAME);
		ellipseData.width = ellipseXML.FloatAttribute(DBConstValues.A_WIDTH);
		ellipseData.height = ellipseXML.FloatAttribute(DBConstValues.A_HEIGHT);

		const XMLElement *transformXML = ellipseXML.FirstChildElement(DBConstValues.TRANSFORM);
		if (transformXML)
		{
			parseTransform(*transformXML, ellipseData.transform);
			parsePivot(*transformXML, ellipseData.pivot);
		}

		return ellipseData;*/
		return null;
	},

	parseTimeline:function(timelineXML, timeline){
		var position = 0;
		var frame = null;

		for (var i = 0, l = timeline.frameList.length; i < l; ++i)
		{
			frame = timeline.frameList[i];
			frame.position = position;
			position += frame.duration;
		}

		if (frame){
			frame.duration = timeline.duration - frame.position;
		}
	},
	
	parseFrame:function(frameXML, frame){
		frame.duration = Math.round(this.getNumber(frameXML, DBConstValues.A_DURATION, 1, 1) * 1000 / this._frameRate);
		frame.action = frameXML[DBConstValues.A_ACTION];
		frame.event = frameXML[DBConstValues.A_EVENT];
		frame.sound = frameXML[DBConstValues.A_SOUND];
	},
	
	parseTransform:function(transformXML, transform){
		transform.x = this.getNumber(transformXML, DBConstValues.A_X, 0, 0) / this._armatureScale;
		transform.y = this.getNumber(transformXML, DBConstValues.A_Y, 0, 0) / this._armatureScale;
		transform.skewX = this.getNumber(transformXML, DBConstValues.A_SKEW_X, 0, 0) * dragonBones.ANGLE_TO_RADIAN;
		transform.skewY = this.getNumber(transformXML, DBConstValues.A_SKEW_Y, 0, 0) * dragonBones.ANGLE_TO_RADIAN;
		transform.scaleX = this.getNumber(transformXML, DBConstValues.A_SCALE_X, 1, 0);
		transform.scaleY = this.getNumber(transformXML, DBConstValues.A_SCALE_Y, 1, 0);
	},
	
	parsePivot:function(transformXML, pivot){
		pivot.x = this.getNumber(transformXML, DBConstValues.A_PIVOT_X, 0, 0) / this._armatureScale;
		pivot.y = this.getNumber(transformXML, DBConstValues.A_PIVOT_Y, 0, 0) / this._armatureScale;
	},
	
	parseColorTransform:function(colorTransformXML, colorTransform){
		colorTransform.alphaOffset = this.getNumber(colorTransformXML, DBConstValues.A_ALPHA_OFFSET, 0, 0);
		colorTransform.redOffset = this.getNumber(colorTransformXML, DBConstValues.A_RED_OFFSET, 0, 0);
		colorTransform.greenOffset = this.getNumber(colorTransformXML, DBConstValues.A_GREEN_OFFSET, 0, 0);
		colorTransform.blueOffset = this.getNumber(colorTransformXML, DBConstValues.A_BLUE_OFFSET, 0, 0);
		colorTransform.alphaMultiplier = this.getNumber(colorTransformXML, DBConstValues.A_ALPHA_MULTIPLIER, 100, 100) * 0.01;
		colorTransform.redMultiplier = this.getNumber(colorTransformXML, DBConstValues.A_RED_MULTIPLIER, 100, 100) * 0.01;
		colorTransform.greenMultiplier = this.getNumber(colorTransformXML, DBConstValues.A_GREEN_MULTIPLIER, 100, 100) * 0.01;
		colorTransform.blueMultiplier = this.getNumber(colorTransformXML, DBConstValues.A_BLUE_MULTIPLIER, 100, 100) * 0.01;
	},
	
	parseTextData:function(textXML, textData){
		/*textData.bold = getBoolean(textXML, ConstValues::A_BOLD.c_str(), false);
		textData.italic = getBoolean(textXML, ConstValues::A_ITALIC.c_str(), false);

		textData.size = textXML.UnsignedAttribute(ConstValues::A_SIZE.c_str());

		const XMLElement *colorXML = textXML.FirstChildElement(ConstValues::COLOR.c_str());
		if (colorXML)
		{
			textData.alpha = colorXML.UnsignedAttribute(ConstValues::A_ALPHA.c_str());
			textData.red = colorXML.UnsignedAttribute(ConstValues::A_RED.c_str());
			textData.green = colorXML.UnsignedAttribute(ConstValues::A_GREEN.c_str());
			textData.blue = colorXML.UnsignedAttribute(ConstValues::A_BLUE.c_str());
		}

		textData.width = textXML.UnsignedAttribute(ConstValues::A_WIDTH.c_str());
		textData.height = textXML.UnsignedAttribute(ConstValues::A_HEIGHT.c_str());

		textData.face = textXML.Attribute(ConstValues::A_FACE.c_str());
		textData.text = textXML.Attribute(ConstValues::A_TEXT.c_str());

		textData.alignH = getAlignHType(textXML.Attribute(ConstValues::A_ALIGN_H.c_str()));
		textData.alignV = getAlignVType(textXML.Attribute(ConstValues::A_ALIGN_V.c_str()));*/
	},
	
	getBoolean:function(data, key, defaultValue){
		if(data && key in data){
			switch(String(data[key])){
			case "0":
			case "NaN":
			case "":
			case "false":
			case "null":
			case "undefined":
				return false;

			case "1":
			case "true":
			default:
				return true;
			}
		}
		return defaultValue;	
	},

	getNumber:function(data, key, defaultValue, nanValue){
		if(nanValue === undefined){ nanValue = NaN; }
		if(data && key in data){
			switch(String(data[key])){
			case "NaN":
			case "":
			case "false":
			case "null":
			case "undefined":
				return nanValue;
			default:
				return Number(data[key]);
			}
		}
		return defaultValue;
	}
});
/*----------------------------------------------------------------------parsers部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------textures部分---------------------------------------------------------------*/
dragonBones.TextureAtlasData = cc.Class.extend({
	autoSearch:false,
	name:null,
	imagePath:null,
	textureDataList:null,
	
	ctor:function(){
		this.textureDataList = [];
	},
	
	dispose:function()
	{
		for (var i = 0, l = this.textureDataList.length; i < l; ++i)
		{
			this.textureDataList[i].dispose();
		}

		this.textureDataList.length = 0;
	},

	getTextureData:function(textureName){
		for (var i = 0, l = this.textureDataList.length; i < l; ++i){
			if (this.textureDataList[i].name == textureName){
				return this.textureDataList[i];
			}
		}
		return null;
	}
});

dragonBones.TextureData = cc.Class.extend({
	rotated:false,
	name:null,
	region:null,
	frame:null,
	
	ctor:function(){
		this.region = new dragonBones.Rectangle();
	},
	
	dispose:function(){
		this.name = null;
		this.region = null;
		this.frame = null;
	}
});
/*----------------------------------------------------------------------textures部分---------------------------------------------------------------*/


/*----------------------------------------------------------------------utils部分---------------------------------------------------------------*/
dragonBones.utils = dragonBones.utils || {};
var DBUtils = dragonBones.utils;

DBUtils.TransformUtil = {
		DOUBLE_PI:Math.PI * 2,

		formatRadian:function(radian){
			radian %= this.DOUBLE_PI;
			if (radian > Math.PI) {
				radian -= this.DOUBLE_PI;
			}
			if (radian < -Math.PI) {
				radian += this.DOUBLE_PI;
			}
			return radian;
		},

		getEaseValue:function(value, easing){
			var valueEase = 1;
			if (easing > 1){// ease in out
				valueEase = 0.5 * (1 - Math.cos(value * Math.PI));
				easing -= 1;
			}else if (easing > 0)    
			{// ease out
				valueEase = 1 - Math.pow(1 - value, 2);
			}else if (easing < 0){// ease in
				easing *= -1;
				valueEase =  Math.pow(value, 2);
			}

			return (valueEase - value) * easing + value;
		}
};
/*----------------------------------------------------------------------utils部分---------------------------------------------------------------*/

/*----------------------------------------------------------------------render部分---------------------------------------------------------------*/
dragonBones.DBCCArmature = dragonBones.Armature.extend({
	_armatureNode:null,
	
	ctor:function(armatureData, animation, eventDispatcher, display){
		dragonBones.Armature.prototype.ctor.call(this, armatureData, animation, eventDispatcher, display);
	},
	
	getCCDisplay:function(){
		return this._display;
	},
	
	getCCEventDispatcher:function(){
		return this._eventDispatcher.eventDispatcher;
	},
	
	dispose:function(){
		this._delayDispose = true;
		if(!this._animation || this._lockDispose){
			return;
		}

		if (this._display){
			this._display.cleanup();
			this._display.release();
		}
		dragonBones.Armature.prototype.dispose.call(this);
	},

	getBoundingBox:function(){
		var r = this.getCCBoundingBox();
		return new dragonBones.Rectangle(r.origin.x, r.origin.y, r.size.width, r.size.height);
	},
	
	getCCBoundingBox:function(){
		var minx = 0, miny = 0, maxx = 0, maxy = 0;
		var first = true;
		var i = this._slotList.length;
		var slot;
		var r;
		var rect;
		while(--i >= 0)
		{
			slot = this._slotList[i];
			if (!slot.getVisible() || !slot.isShowDisplay()) { continue; }
			r = slot.getBoundingBox();
			if (first){
				first = false;
				minx = r.x;
				miny = r.y;
				maxx = r.x + r.width;
				maxy = r.y + r.height;
			}else{
				minx = r.x < minx ? r.x : minx;
				miny = r.y < miny ? r.y : miny;
				maxx = r.x + r.width > maxx ? r.x + r.width : maxx;
				maxy = r.y + r.height > maxy ? r.y + r.height : maxy;
			}
		}
		rect = cc.rect(minx, miny, maxx - minx, maxy - miny);
		return cc.rectApplyAffineTransform(rect, getCCDisplay().getNodeToParentTransform());
	},

	getCCSlot:function(slotName){
		var slot = this.getSlot(slotName);
		return slot ? slot : null;
	},

	getArmatureNode:function(){
		return this._armatureNode;
	},
	setArmatureNode:function(armatureNode){
		this._armatureNode = armatureNode;
	},
	
	sortSlotsByZOrder:function(){
		this._slotList.sort(this.sortSlot);
		
		var nShowCount = 0;
		var nDisplayChildrenCount = this._display.getChildrenCount();

		var slot;
		var slotDisplayNode;
		for (var i = 0, l = this._slotList.length; i < l; ++i){
			slot = this._slotList[i];
			if (slot.isShowDisplay()){
				slotDisplayNode = slot.getDisplay();
				if (slotDisplayNode){
					slotDisplayNode.setLocalZOrder(nDisplayChildrenCount + nShowCount);
				}
				nShowCount += 1;
			}
		}
		this._slotsZOrderChanged = false;
	}
});

dragonBones.DBCCArmatureNode = cc.Node.extend({
	_armature:null,
	_clock:null,
	
	ctor:function(){},
	
	getCCSlot:function(slotName){ return this._armature.getCCSlot(slotName); },
	getCCDisplay:function(){ return this._armature.getCCDisplay(); },
	getCCEventDispatcher:function(){ return this._armature.getCCEventDispatcher(); },
	getBoundingBox:function(){},
	
	/*static DBCCArmatureNode* create(DBCCArmature *armature);
	
	/**
	 * create DDCCArmatureNode with WorldClock
	 * @param armature
	 * @param clock if null, use WorldClock::getInstance()
	 * @return 
	 
	static DBCCArmatureNode* createWithWorldClock(DBCCArmature *armature, WorldClock *clock);*/
	
	initWithDBCCArmature:function(armature, clock){},

	getArmature:function(){ return this._armature; },
	getAnimation:function(){ return this._armature.getAnimation(); },

	update:function(dt){},
	advanceTime:function(dt){}
});

dragonBones.DBCCEventDispatcher = cc.Class.extend({
	eventDispatcher:null,
	ctor:function(){},
	dispose:function(){
		if(this.eventDispatcher){
			//BUG #1事件移除需修改(自己手动移除事件)
			//eventDispatcher.removeAllEventListeners();
			//eventDispatcher.setEnabled(false);
            this.eventDispatcher = null;
		}
	},
	
	dispatchEvent:function(eventData){
		if (this.eventDispatcher){
			this.eventDispatcher.dispatchCustomEvent(eventData.getStringType(), eventData);
		}
	},

	hasEvent:function(eventDataType){
		return this.eventDispatcher != null;//存在问题
	}
});

dragonBones.DBCCFactory = dragonBones.BaseFactory.extend({
	ctor:function(){
		this._super();
	},
	
	/**
	 * 
	 * @return {dragonBones.Armature}
	 */
	buildArmature:function(armatureName, skinName, animationName, dragonBonesName, textureAtlasName){
		return dragonBones.BaseFactory.prototype.buildArmature.call(this, armatureName, skinName, animationName, dragonBonesName, textureAtlasName);
	},
	
	buildArmatureNode:function(armatureName, skinName, animationName, dragonBonesName, textureAtlasName){
		throw new Error("buildArmatureNode Error!");
		return null;
	},

	loadDragonBonesData:function(dragonBonesFilePath, name){
		if(name === undefined){ name = null; }
		
		var existDragonBonesData = this.getDragonBonesData(name);
		if (existDragonBonesData){
			return existDragonBonesData;
		}

		var data = cc.loader.getRes(dragonBonesFilePath);
		if (data == null){
			return null;
		}
		// armature scale
		var scale = cc.director.getContentScaleFactor();

		var parser = new dragonBones.ObjectDataParser();
		var dragonBonesData = parser.parseDragonBonesData(data, scale);
		this.addDragonBonesData(dragonBonesData, name);
		return dragonBonesData;
	},
	
	loadTextureAtlas:function(textureAtlasFile, name){
		if(name === undefined){ name = null; }
		
		var existTextureAtlas = this.getTextureAtlas(name);

		if (existTextureAtlas){
			this.refreshTextureAtlasTexture(name == null ? existTextureAtlas.textureAtlasData.name : name);
			return existTextureAtlas;
		}

		var data = cc.loader.getRes(textureAtlasFile);
		if (data == null){
			return nullptr;
		}

		// textureAtlas scale
		var scale =  cc.director.getContentScaleFactor();

		var parser = new dragonBones.ObjectDataParser();
		var textureAtlas = new dragonBones.DBCCTextureAtlas();
		textureAtlas.textureAtlasData = parser.parseTextureAtlasData(data, scale);

		var pos = textureAtlasFile.lastIndexOf("/");

		if(-1 != pos){
			var base_path = textureAtlasFile.substr(0, pos + 1);
			textureAtlas.textureAtlasData.imagePath = base_path + textureAtlas.textureAtlasData.imagePath;
		}

		//
		this.addTextureAtlas(textureAtlas, name);
		this.refreshTextureAtlasTexture(name == null ? textureAtlas.textureAtlasData.name : name);
		return textureAtlas;
	},
	
	refreshTextureAtlasTexture:function(name){
		var textureAtlas;
		for(var key in this._textureAtlasMap){
			textureAtlas = this._textureAtlasMap[key];
			//textureAtlasData = textureAtlas.textureAtlasData;
			if(key == name){
				textureAtlas.reloadTexture();
			}
		}
	},
	
	refreshAllTextureAtlasTexture:function(){
		var textureAtlas;
		for(var key in this._textureAtlasMap){
			textureAtlas = this._textureAtlasMap[key];
			textureAtlas.reloadTexture();
		}
	},
	
	hasDragonBones:function(skeletonName, armatureName, animationName){
		if(armatureName === undefined){ armatureName = null; }
		if(animationName === undefined){ animationName = null; }
		
		var dragonbonesData = this.getDragonBonesData(skeletonName);

		if (!dragonbonesData) { return false; }

		if (armatureName){
			var armatureData = dragonbonesData.getArmatureData(armatureName);

			if (!armatureData) { return false; }

			if (animationName){
				var  animationData = armatureData.getAnimationData(animationName);
				return animationData != null;
			}
		}
		
		return true;
	},
	
	generateArmature:function(armatureData){
		var animation = new dragonBones.Animation();
		// sprite
		var display = new cc.Node();
		display.setCascadeColorEnabled(true);
		display.setCascadeOpacityEnabled(true);
		display.retain();
		// eventDispatcher
		var eventDispatcher = new dragonBones.DBCCEventDispatcher();
		eventDispatcher.eventDispatcher = cc.eventManager;
		
		// armature
		return new dragonBones.DBCCArmature(armatureData, animation, eventDispatcher, display);
	},
	
	generateSlot:function(slotData){
		return new dragonBones.DBCCSlot(slotData);
	},
	
	generateDisplay:function(textureAtlas, textureData, displayData){
		var dbccTextureAtlas = textureAtlas;

		if (!dbccTextureAtlas || !textureData) return null;

		var texture = dbccTextureAtlas.getTexture();
		//cc.assert(texture);

		var x = textureData.region.x;
		var y = textureData.region.y;
		var rotated = textureData.rotated;
		var width = rotated ? textureData.region.height : textureData.region.width;
		var height = rotated ? textureData.region.width : textureData.region.height;
		var rect = cc.rect(x, y, width, height);
		var offset = cc.p(0, 0);
		var originSize = cc.size(width, height);

		if (textureData.frame)
		{
			var px = -textureData.frame.x;
			var py = -textureData.frame.y;
			originSize.width = textureData.frame.width;
			originSize.height = textureData.frame.height;
			// offset = sprite center - trimed texture center
			var cx1 = px + rect.size.width / 2;
			var cy1 = originSize.height - py - rect.size.height / 2;
			var cx2 = originSize.width / 2;
			var cy2 = originSize.height / 2;
			offset.x = cx2 - cx1;
			offset.y = cy2 - cy1;
		}
		// sprite

		var spriteFrame = new cc.SpriteFrame(texture, rect, textureData.rotated, offset, originSize);
		var display = new cc.Sprite(spriteFrame);
		display.setCascadeColorEnabled(true);
		display.setCascadeOpacityEnabled(true);
		display.retain();
		var pivotX = 0;
		var pivotY = 0;

		if (displayData){
			pivotX = displayData.pivot.x;
			pivotY = displayData.pivot.y;
		}

		display.setAnchorPoint(cc.p(pivotX / originSize.width, 1 - pivotY / originSize.height));
		display.setContentSize(originSize);

		return display;
	}
});

dragonBones.DBCCSlot = dragonBones.Slot.extend({
	_nodeDisplay:null,
	
	ctor:function(slotData){
		dragonBones.Slot.prototype.ctor.call(this, slotData);
	},
	
	dispose:function(){
		this.disposeDisplayList();
		dragonBones.Slot.prototype.dispose.call(this);
		this._nodeDisplay = null;
	},
	
	getCCDisplay:function(){
		return this._nodeDisplay;
	},
	
	getCCChildArmature:function(){
		return this._childArmature;
	},

	getGlobalPosition:function(){
		return cc.p(global.x, global.y);
	},

	setDisplayImage:function(display, disposeExisting){
		if(disposeExisting === undefined){ disposeExisting = true; }
		dragonBones.Slot.prototype.setDisplay.call(this, display, dragonBones.DisplayType.DT_IMAGE, disposeExisting);
	},
	
	getBoundingBox:function(){
		if (this._displayIndex < 0){
			return new dragonBones.Rectangle();
		}

		if(this._displayList[this._displayIndex] instanceof dragonBones.Armature){
			return this.getCCChildArmature().getBoundingBox();
		}

		var displayA = this.getCCDisplay();
		if (displayA){
			var r = displayA.getBoundingBox();
			return new dragonBones.Rectangle(r.origin.x, r.origin.y, r.size.width, r.size.height); 
		}
		return new dragonBones.Rectangle();
	},
	
	updateDisplayColor:function(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier){
		if (this._nodeDisplay){
			//record colorTransform
			dragonBones.Slot.prototype.updateDisplayColor.call(this, aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier);

			// cocos2dx does not support offset of color.
			this._nodeDisplay.setOpacity(aMultiplier * 255);
			this._nodeDisplay.setColor(cc.color(rMultiplier * 255 , gMultiplier * 255 , bMultiplier * 255, null));
		}
	},

	getDisplayZIndex:function(){
		if (this._nodeDisplay){
			return this._nodeDisplay.getLocalZOrder();
		}
		return -1;
	},
	
	addDisplayToContainer:function(container, zIndex){
		if (this._nodeDisplay && container){
			this.removeDisplayFromContainer();
            if(container._displayBatchNode == null)
            {
                container._displayBatchNode = cc.SpriteBatchNode.create(this._nodeDisplay.texture, cc.SpriteBatchNode.DEFAULT_CAPACITY);
                container._display.addChild(container._displayBatchNode);
            }
			if (zIndex < 0){
                container._displayBatchNode.addChild(this._nodeDisplay, container._displayBatchNode.getChildrenCount());
			}else{
                container._displayBatchNode.addChild(this._nodeDisplay, zIndex);
			}
		}
	},
	
	removeDisplayFromContainer:function(){
		if (this._nodeDisplay && this._nodeDisplay.getParent()){
			this._nodeDisplay.removeFromParent(false);
		}
	},
	
	disposeDisplay:function(){
		if (this._nodeDisplay){
			this._nodeDisplay.cleanup();
			this._nodeDisplay.release();
			this._nodeDisplay = null;
		}
	},
	
	disposeDisplayList:function(){
		var releasedNodeList = [];

		var displayA;
		var armature;
		for (var i = 0, l = this._displayList.length; i < l; ++i)
		{
			displayA = this._displayList[i];
			if (displayA instanceof dragonBones.Armature){
				displayA.dispose();
			}else{
				if(displayA && releasedNodeList.indexOf(displayA) < 0){
					displayA.cleanup();
					displayA.release();
					releasedNodeList.push(displayA);
				}
			}
		}
		releasedNodeList.length = 0;
	},
	
	updateDisplay:function(display){
		this._nodeDisplay = display;
	},
	
	updateDisplayBlendMode:function(blendMode){
		var spriteDisplay = this._nodeDisplay;

		if (spriteDisplay){
			switch (blendMode)
			{
			case dragonBones.BlendMode.BM_ADD:
			{
				var texture = spriteDisplay.getTexture();
				
				if(texture && texture.hasPremultipliedAlpha()){
					spriteDisplay.setBlendFunc(new cc.BlendFunc(cc.ONE, cc.ONE));
				}else{
					spriteDisplay.setBlendFunc(new cc.BlendFunc(cc.SRC_ALPHA, cc.ONE));
				}
				break;
			}
			case dragonBones.BlendMode.BM_ALPHA:
				break;

			case dragonBones.BlendMode.BM_DARKEN:
				break;

			case dragonBones.BlendMode.BM_DIFFERENCE:
				break;

			case dragonBones.BlendMode.BM_ERASE:
				break;

			case dragonBones.BlendMode.BM_HARDLIGHT:
				break;

			case dragonBones.BlendMode.BM_INVERT:
				break;

			case dragonBones.BlendMode.BM_LAYER:
				break;

			case dragonBones.BlendMode.BM_LIGHTEN:
				break;

			case dragonBones.BlendMode.BM_MULTIPLY:
				break;

			case dragonBones.BlendMode.BM_NORMAL:
				break;

			case dragonBones.BlendMode.BM_OVERLAY:
				break;

			case dragonBones.BlendMode.BM_SCREEN:
				break;

			case dragonBones.BlendMode.BM_SHADER:
				break;

			case dragonBones.BlendMode.BM_SUBTRACT:
				break;

			default:
				break;
			}

			if (this._childArmature){
				var slot;
				var list = this._childArmature.getSlots();
				for (var i = 0, l = list.length; i < l; ++i){
					slot = list[i];
					slot._blendMode = blendMode;
					slot.updateDisplayBlendMode(blendMode);
				}
			}
		}
	},
	
	updateDisplayVisible:function(visible){
		if (this._nodeDisplay && this._parent){
			this._nodeDisplay.setVisible(this._parent.getVisible() && this._visible && visible);
		}
	},
	
	updateDisplayTransform:function(){
		if (this._nodeDisplay){
			this._nodeDisplay.setScaleX(this.global.scaleX);
			this._nodeDisplay.setScaleY(this.global.scaleY);
			this._nodeDisplay.setRotationX(this.global.skewX * dragonBones.RADIAN_TO_ANGLE);
			this._nodeDisplay.setRotationY(this.global.skewY * dragonBones.RADIAN_TO_ANGLE);
			this._nodeDisplay.setPosition(this.global.x , -this.global.y);
		}
	}
});

dragonBones.DBCCTextureAtlas = cc.Class.extend({
	textureAtlasData:null,
	
	ctor:function(){},
	
	dispose:function(){
		if (this.textureAtlasData){
			this.textureAtlasData.dispose();
			this.textureAtlasData = null;
		}
	},
	
	getTexture:function(){
		if (!this.textureAtlasData) return null;

		var textureCache = cc.textureCache; 
		var texture = textureCache.getTextureForKey(this.textureAtlasData.imagePath);
		if (!texture){
			texture = textureCache.addImage(this.textureAtlasData.imagePath);
		}
		return texture;
	},
	
	reloadTexture:function(){
		if (!this.textureAtlasData) return null;
		var textureCache = cc.textureCache;
		return textureCache.addImage(this.textureAtlasData.imagePath);
	}
});


/*----------------------------------------------------------------------render部分---------------------------------------------------------------*/





