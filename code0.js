gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDClickButtonObjects1= [];
gdjs.gameCode.GDClickButtonObjects2= [];
gdjs.gameCode.GDClickEffectObjects1= [];
gdjs.gameCode.GDClickEffectObjects2= [];
gdjs.gameCode.GDBalanceTEXTObjects1= [];
gdjs.gameCode.GDBalanceTEXTObjects2= [];
gdjs.gameCode.GDUIiconObjects1= [];
gdjs.gameCode.GDUIiconObjects2= [];
gdjs.gameCode.GDbackgroundObjects1= [];
gdjs.gameCode.GDbackgroundObjects2= [];
gdjs.gameCode.GDAirDropTEXTObjects1= [];
gdjs.gameCode.GDAirDropTEXTObjects2= [];
gdjs.gameCode.GDARcoinObjects1= [];
gdjs.gameCode.GDARcoinObjects2= [];
gdjs.gameCode.GDAirDropTEXT2Objects1= [];
gdjs.gameCode.GDAirDropTEXT2Objects2= [];
gdjs.gameCode.GDdesignObjects1= [];
gdjs.gameCode.GDdesignObjects2= [];
gdjs.gameCode.GDAirDropTEXT3Objects1= [];
gdjs.gameCode.GDAirDropTEXT3Objects2= [];
gdjs.gameCode.GDtelegramIconObjects1= [];
gdjs.gameCode.GDtelegramIconObjects2= [];
gdjs.gameCode.GDdesignButtonObjects1= [];
gdjs.gameCode.GDdesignButtonObjects2= [];
gdjs.gameCode.GDTaskTEXTObjects1= [];
gdjs.gameCode.GDTaskTEXTObjects2= [];
gdjs.gameCode.GDdesignIcon2Objects1= [];
gdjs.gameCode.GDdesignIcon2Objects2= [];
gdjs.gameCode.GDTaskTEXT2Objects1= [];
gdjs.gameCode.GDTaskTEXT2Objects2= [];
gdjs.gameCode.GDTaskTEXT3Objects1= [];
gdjs.gameCode.GDTaskTEXT3Objects2= [];
gdjs.gameCode.GDtaskCompleteObjects1= [];
gdjs.gameCode.GDtaskCompleteObjects2= [];
gdjs.gameCode.GDTaskTEXT4Objects1= [];
gdjs.gameCode.GDTaskTEXT4Objects2= [];
gdjs.gameCode.GDIconCompDesignObjects1= [];
gdjs.gameCode.GDIconCompDesignObjects2= [];
gdjs.gameCode.GDdesignIcon3Objects1= [];
gdjs.gameCode.GDdesignIcon3Objects2= [];
gdjs.gameCode.GDTaskTEXT5Objects1= [];
gdjs.gameCode.GDTaskTEXT5Objects2= [];
gdjs.gameCode.GDTaskTEXT6Objects1= [];
gdjs.gameCode.GDTaskTEXT6Objects2= [];
gdjs.gameCode.GDTaskTEXT7Objects1= [];
gdjs.gameCode.GDTaskTEXT7Objects2= [];
gdjs.gameCode.GDTaskTEXT8Objects1= [];
gdjs.gameCode.GDTaskTEXT8Objects2= [];
gdjs.gameCode.GDdesignIcon4Objects1= [];
gdjs.gameCode.GDdesignIcon4Objects2= [];
gdjs.gameCode.GDTaskTEXT9Objects1= [];
gdjs.gameCode.GDTaskTEXT9Objects2= [];
gdjs.gameCode.GDTaskTEXT10Objects1= [];
gdjs.gameCode.GDTaskTEXT10Objects2= [];
gdjs.gameCode.GDdesignIcon5Objects1= [];
gdjs.gameCode.GDdesignIcon5Objects2= [];
gdjs.gameCode.GDErrorTextObjects1= [];
gdjs.gameCode.GDErrorTextObjects2= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDClickEffectObjects1Objects = Hashtable.newFrom({"ClickEffect": gdjs.gameCode.GDClickEffectObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects = Hashtable.newFrom({"designIcon5": gdjs.gameCode.GDdesignIcon5Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects = Hashtable.newFrom({"ErrorText": gdjs.gameCode.GDErrorTextObjects1});
gdjs.gameCode.asyncCallback10672196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ErrorText"), gdjs.gameCode.GDErrorTextObjects2);

{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDErrorTextObjects1) asyncObjectsList.addObject("ErrorText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.gameCode.asyncCallback10672196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects = Hashtable.newFrom({"designIcon4": gdjs.gameCode.GDdesignIcon4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects = Hashtable.newFrom({"ErrorText": gdjs.gameCode.GDErrorTextObjects1});
gdjs.gameCode.asyncCallback10320868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ErrorText"), gdjs.gameCode.GDErrorTextObjects2);

{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDErrorTextObjects1) asyncObjectsList.addObject("ErrorText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.gameCode.asyncCallback10320868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects = Hashtable.newFrom({"designIcon3": gdjs.gameCode.GDdesignIcon3Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects = Hashtable.newFrom({"ErrorText": gdjs.gameCode.GDErrorTextObjects1});
gdjs.gameCode.asyncCallback9666452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ErrorText"), gdjs.gameCode.GDErrorTextObjects2);

{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDErrorTextObjects1) asyncObjectsList.addObject("ErrorText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.gameCode.asyncCallback9666452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon2Objects1Objects = Hashtable.newFrom({"designIcon2": gdjs.gameCode.GDdesignIcon2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.asyncCallback10648604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(15000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(15000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Tasks.Subscribe", runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Subscribe").getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Balance", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TOTbalance", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback10648604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects = Hashtable.newFrom({"designIcon5": gdjs.gameCode.GDdesignIcon5Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects = Hashtable.newFrom({"designIcon4": gdjs.gameCode.GDdesignIcon4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects = Hashtable.newFrom({"designIcon3": gdjs.gameCode.GDdesignIcon3Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon2Objects1Objects = Hashtable.newFrom({"designIcon2": gdjs.gameCode.GDdesignIcon2Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects2Objects = Hashtable.newFrom({"taskComplete": gdjs.gameCode.GDtaskCompleteObjects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects2Objects = Hashtable.newFrom({"TaskTEXT4": gdjs.gameCode.GDTaskTEXT4Objects2});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects2Objects = Hashtable.newFrom({"IconCompDesign": gdjs.gameCode.GDIconCompDesignObjects2});
gdjs.gameCode.asyncCallback9914076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT2"), gdjs.gameCode.GDTaskTEXT2Objects2);
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT3"), gdjs.gameCode.GDTaskTEXT3Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("designIcon2"), gdjs.gameCode.GDdesignIcon2Objects2);

gdjs.gameCode.GDIconCompDesignObjects2.length = 0;

gdjs.gameCode.GDTaskTEXT4Objects2.length = 0;

gdjs.gameCode.GDtaskCompleteObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects2Objects, 800, 200, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects2Objects, 960, 252, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects2Objects, 845, 238, "");
}{for(var i = 0, len = gdjs.gameCode.GDdesignButtonObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDdesignButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT3Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT3Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDdesignIcon2Objects2.length ;i < len;++i) {
    gdjs.gameCode.GDdesignIcon2Objects2[i].deleteFromScene(runtimeScene);
}
}gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDdesignButtonObjects1) asyncObjectsList.addObject("designButton", obj);
for (const obj of gdjs.gameCode.GDdesignIcon2Objects1) asyncObjectsList.addObject("designIcon2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.gameCode.asyncCallback9914076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects = Hashtable.newFrom({"designIcon3": gdjs.gameCode.GDdesignIcon3Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects = Hashtable.newFrom({"taskComplete": gdjs.gameCode.GDtaskCompleteObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects = Hashtable.newFrom({"TaskTEXT4": gdjs.gameCode.GDTaskTEXT4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects = Hashtable.newFrom({"IconCompDesign": gdjs.gameCode.GDIconCompDesignObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects = Hashtable.newFrom({"designIcon4": gdjs.gameCode.GDdesignIcon4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects = Hashtable.newFrom({"taskComplete": gdjs.gameCode.GDtaskCompleteObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects = Hashtable.newFrom({"TaskTEXT4": gdjs.gameCode.GDTaskTEXT4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects = Hashtable.newFrom({"IconCompDesign": gdjs.gameCode.GDIconCompDesignObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects = Hashtable.newFrom({"designIcon5": gdjs.gameCode.GDdesignIcon5Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects = Hashtable.newFrom({"designButton": gdjs.gameCode.GDdesignButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects = Hashtable.newFrom({"taskComplete": gdjs.gameCode.GDtaskCompleteObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects = Hashtable.newFrom({"TaskTEXT4": gdjs.gameCode.GDTaskTEXT4Objects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects = Hashtable.newFrom({"IconCompDesign": gdjs.gameCode.GDIconCompDesignObjects1});
gdjs.gameCode.eventsList5 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BalanceTEXT"), gdjs.gameCode.GDBalanceTEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconCompDesign"), gdjs.gameCode.GDIconCompDesignObjects1);
{for(var i = 0, len = gdjs.gameCode.GDBalanceTEXTObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDBalanceTEXTObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}{gdjs.evtTools.advancedWindow.setResizable(false, runtimeScene);
}{for(var i = 0, len = gdjs.gameCode.GDIconCompDesignObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDIconCompDesignObjects1[i].getBehavior("Resizable").setSize(93, 84);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Balance", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Tasks.Subscribe", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Subscribe"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Taps", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Tasks.Taps", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Taps"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "S_inGame", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Tasks.12Hours", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("12Hours"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "TOTbalance", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Saves", "Tasks.Collect50k", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Collect50k"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickButton"), gdjs.gameCode.GDClickButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDClickButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDClickButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDClickButtonObjects1[k] = gdjs.gameCode.GDClickButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDClickButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.gameCode.GDClickEffectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDClickEffectObjects1Objects, gdjs.randomInRange(60, 660), -(100), "");
}{for(var i = 0, len = gdjs.gameCode.GDClickEffectObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDClickEffectObjects1[i].getBehavior("Resizable").setSize(120, 120);
}
}{for(var i = 0, len = gdjs.gameCode.GDClickEffectObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDClickEffectObjects1[i].setZOrder(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Balance", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TOTbalance", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Taps", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("telegramIcon"), gdjs.gameCode.GDtelegramIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDtelegramIconObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDtelegramIconObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDtelegramIconObjects1[k] = gdjs.gameCode.GDtelegramIconObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDtelegramIconObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://t.me/Lunaris_Coin", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "TimeInGame", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "S_inGame", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon5"), gdjs.gameCode.GDdesignIcon5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 50000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
gdjs.gameCode.GDErrorTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects, 40, 1120, "UI");
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].setWrappingWidth(640);
}
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].getBehavior("Text").setText("Task is not completed!");
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon4"), gdjs.gameCode.GDdesignIcon4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 43200;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
gdjs.gameCode.GDErrorTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects, 40, 1120, "UI");
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].setWrappingWidth(640);
}
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].getBehavior("Text").setText("Task is not completed!");
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon3"), gdjs.gameCode.GDdesignIcon3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 1000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
gdjs.gameCode.GDErrorTextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDErrorTextObjects1Objects, 40, 1120, "UI");
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].setWrappingWidth(640);
}
}{for(var i = 0, len = gdjs.gameCode.GDErrorTextObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDErrorTextObjects1[i].getBehavior("Text").setText("Task is not completed!");
}
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon2"), gdjs.gameCode.GDdesignIcon2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Subscribe"), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://t.me/Lunaris_Coin", runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Subscribe").setBoolean(true);
}
{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon5"), gdjs.gameCode.GDdesignIcon5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Collect50k"), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 50000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Collect50k").setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(5000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Tasks.Collect50k", runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Collect50k").getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Balance", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TOTbalance", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon4"), gdjs.gameCode.GDdesignIcon4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("12Hours"), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= 43200;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("12Hours").setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(10000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Tasks.12Hours", runtimeScene.getGame().getVariables().getFromIndex(4).getChild("12Hours").getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Balance", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TOTbalance", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon3"), gdjs.gameCode.GDdesignIcon3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Taps"), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 1000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDdesignButtonObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDdesignButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDdesignButtonObjects1[k] = gdjs.gameCode.GDdesignButtonObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDdesignButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Taps").setBoolean(true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1000);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Tasks.Taps", runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Taps").getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "Balance", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Saves", "TOTbalance", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon2"), gdjs.gameCode.GDdesignIcon2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Subscribe"), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon2Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10345436);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon3"), gdjs.gameCode.GDdesignIcon3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Taps"), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon3Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9621756);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT5"), gdjs.gameCode.GDTaskTEXT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT6"), gdjs.gameCode.GDTaskTEXT6Objects1);
/* Reuse gdjs.gameCode.GDdesignButtonObjects1 */
/* Reuse gdjs.gameCode.GDdesignIcon3Objects1 */
gdjs.gameCode.GDIconCompDesignObjects1.length = 0;

gdjs.gameCode.GDTaskTEXT4Objects1.length = 0;

gdjs.gameCode.GDtaskCompleteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects, 800, 400, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects, 960, 452, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects, 845, 438, "");
}{for(var i = 0, len = gdjs.gameCode.GDdesignButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT6Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT5Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDdesignIcon3Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignIcon3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon4"), gdjs.gameCode.GDdesignIcon4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("12Hours"), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon4Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10006508);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT7"), gdjs.gameCode.GDTaskTEXT7Objects1);
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT8"), gdjs.gameCode.GDTaskTEXT8Objects1);
/* Reuse gdjs.gameCode.GDdesignButtonObjects1 */
/* Reuse gdjs.gameCode.GDdesignIcon4Objects1 */
gdjs.gameCode.GDIconCompDesignObjects1.length = 0;

gdjs.gameCode.GDTaskTEXT4Objects1.length = 0;

gdjs.gameCode.GDtaskCompleteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects, 800, 600, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects, 960, 652, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects, 845, 638, "");
}{for(var i = 0, len = gdjs.gameCode.GDdesignButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT7Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT7Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT8Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT8Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDdesignIcon4Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignIcon4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("designButton"), gdjs.gameCode.GDdesignButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("designIcon5"), gdjs.gameCode.GDdesignIcon5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Collect50k"), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignIcon5Objects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDdesignButtonObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10189268);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT10"), gdjs.gameCode.GDTaskTEXT10Objects1);
gdjs.copyArray(runtimeScene.getObjects("TaskTEXT9"), gdjs.gameCode.GDTaskTEXT9Objects1);
/* Reuse gdjs.gameCode.GDdesignButtonObjects1 */
/* Reuse gdjs.gameCode.GDdesignIcon5Objects1 */
gdjs.gameCode.GDIconCompDesignObjects1.length = 0;

gdjs.gameCode.GDTaskTEXT4Objects1.length = 0;

gdjs.gameCode.GDtaskCompleteObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDtaskCompleteObjects1Objects, 800, 800, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDTaskTEXT4Objects1Objects, 960, 852, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDIconCompDesignObjects1Objects, 845, 838, "");
}{for(var i = 0, len = gdjs.gameCode.GDdesignButtonObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT10Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT10Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDTaskTEXT9Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDTaskTEXT9Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.gameCode.GDdesignIcon5Objects1.length ;i < len;++i) {
    gdjs.gameCode.GDdesignIcon5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ClickEffect"), gdjs.gameCode.GDClickEffectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDClickEffectObjects1.length;i<l;++i) {
    if ( !(gdjs.gameCode.GDClickEffectObjects1[i].getBehavior("InOnScreen").IsOnScreen(300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDClickEffectObjects1[k] = gdjs.gameCode.GDClickEffectObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDClickEffectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDClickEffectObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDClickEffectObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDClickEffectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) <= 1440;
}
if (isConditionTrue_0) {
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "horizontal", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) < 0;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) > 1440;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1440 + 360, "", 0);
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDClickButtonObjects1.length = 0;
gdjs.gameCode.GDClickButtonObjects2.length = 0;
gdjs.gameCode.GDClickEffectObjects1.length = 0;
gdjs.gameCode.GDClickEffectObjects2.length = 0;
gdjs.gameCode.GDBalanceTEXTObjects1.length = 0;
gdjs.gameCode.GDBalanceTEXTObjects2.length = 0;
gdjs.gameCode.GDUIiconObjects1.length = 0;
gdjs.gameCode.GDUIiconObjects2.length = 0;
gdjs.gameCode.GDbackgroundObjects1.length = 0;
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXTObjects1.length = 0;
gdjs.gameCode.GDAirDropTEXTObjects2.length = 0;
gdjs.gameCode.GDARcoinObjects1.length = 0;
gdjs.gameCode.GDARcoinObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXT2Objects1.length = 0;
gdjs.gameCode.GDAirDropTEXT2Objects2.length = 0;
gdjs.gameCode.GDdesignObjects1.length = 0;
gdjs.gameCode.GDdesignObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXT3Objects1.length = 0;
gdjs.gameCode.GDAirDropTEXT3Objects2.length = 0;
gdjs.gameCode.GDtelegramIconObjects1.length = 0;
gdjs.gameCode.GDtelegramIconObjects2.length = 0;
gdjs.gameCode.GDdesignButtonObjects1.length = 0;
gdjs.gameCode.GDdesignButtonObjects2.length = 0;
gdjs.gameCode.GDTaskTEXTObjects1.length = 0;
gdjs.gameCode.GDTaskTEXTObjects2.length = 0;
gdjs.gameCode.GDdesignIcon2Objects1.length = 0;
gdjs.gameCode.GDdesignIcon2Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT2Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT2Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT3Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT3Objects2.length = 0;
gdjs.gameCode.GDtaskCompleteObjects1.length = 0;
gdjs.gameCode.GDtaskCompleteObjects2.length = 0;
gdjs.gameCode.GDTaskTEXT4Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT4Objects2.length = 0;
gdjs.gameCode.GDIconCompDesignObjects1.length = 0;
gdjs.gameCode.GDIconCompDesignObjects2.length = 0;
gdjs.gameCode.GDdesignIcon3Objects1.length = 0;
gdjs.gameCode.GDdesignIcon3Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT5Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT5Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT6Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT6Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT7Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT7Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT8Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT8Objects2.length = 0;
gdjs.gameCode.GDdesignIcon4Objects1.length = 0;
gdjs.gameCode.GDdesignIcon4Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT9Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT9Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT10Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT10Objects2.length = 0;
gdjs.gameCode.GDdesignIcon5Objects1.length = 0;
gdjs.gameCode.GDdesignIcon5Objects2.length = 0;
gdjs.gameCode.GDErrorTextObjects1.length = 0;
gdjs.gameCode.GDErrorTextObjects2.length = 0;

gdjs.gameCode.eventsList5(runtimeScene);
gdjs.gameCode.GDClickButtonObjects1.length = 0;
gdjs.gameCode.GDClickButtonObjects2.length = 0;
gdjs.gameCode.GDClickEffectObjects1.length = 0;
gdjs.gameCode.GDClickEffectObjects2.length = 0;
gdjs.gameCode.GDBalanceTEXTObjects1.length = 0;
gdjs.gameCode.GDBalanceTEXTObjects2.length = 0;
gdjs.gameCode.GDUIiconObjects1.length = 0;
gdjs.gameCode.GDUIiconObjects2.length = 0;
gdjs.gameCode.GDbackgroundObjects1.length = 0;
gdjs.gameCode.GDbackgroundObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXTObjects1.length = 0;
gdjs.gameCode.GDAirDropTEXTObjects2.length = 0;
gdjs.gameCode.GDARcoinObjects1.length = 0;
gdjs.gameCode.GDARcoinObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXT2Objects1.length = 0;
gdjs.gameCode.GDAirDropTEXT2Objects2.length = 0;
gdjs.gameCode.GDdesignObjects1.length = 0;
gdjs.gameCode.GDdesignObjects2.length = 0;
gdjs.gameCode.GDAirDropTEXT3Objects1.length = 0;
gdjs.gameCode.GDAirDropTEXT3Objects2.length = 0;
gdjs.gameCode.GDtelegramIconObjects1.length = 0;
gdjs.gameCode.GDtelegramIconObjects2.length = 0;
gdjs.gameCode.GDdesignButtonObjects1.length = 0;
gdjs.gameCode.GDdesignButtonObjects2.length = 0;
gdjs.gameCode.GDTaskTEXTObjects1.length = 0;
gdjs.gameCode.GDTaskTEXTObjects2.length = 0;
gdjs.gameCode.GDdesignIcon2Objects1.length = 0;
gdjs.gameCode.GDdesignIcon2Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT2Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT2Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT3Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT3Objects2.length = 0;
gdjs.gameCode.GDtaskCompleteObjects1.length = 0;
gdjs.gameCode.GDtaskCompleteObjects2.length = 0;
gdjs.gameCode.GDTaskTEXT4Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT4Objects2.length = 0;
gdjs.gameCode.GDIconCompDesignObjects1.length = 0;
gdjs.gameCode.GDIconCompDesignObjects2.length = 0;
gdjs.gameCode.GDdesignIcon3Objects1.length = 0;
gdjs.gameCode.GDdesignIcon3Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT5Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT5Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT6Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT6Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT7Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT7Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT8Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT8Objects2.length = 0;
gdjs.gameCode.GDdesignIcon4Objects1.length = 0;
gdjs.gameCode.GDdesignIcon4Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT9Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT9Objects2.length = 0;
gdjs.gameCode.GDTaskTEXT10Objects1.length = 0;
gdjs.gameCode.GDTaskTEXT10Objects2.length = 0;
gdjs.gameCode.GDdesignIcon5Objects1.length = 0;
gdjs.gameCode.GDdesignIcon5Objects2.length = 0;
gdjs.gameCode.GDErrorTextObjects1.length = 0;
gdjs.gameCode.GDErrorTextObjects2.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
