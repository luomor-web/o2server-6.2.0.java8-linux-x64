o2.LP = window.LP || {
	"name": "Name",
	"description": "Description",
	"searchKey": "Search",
	"desktop_style": "dDesktop",
	"flat_style": "Flat",
	"cmsName" : "CMS",
	"processName" : "Process",
	"portalName" : "Portal"
};

o2.LP.process = {
	"unnamed": "Unnamed",
	"unknow": "Unknow",
	"processConfig": "Process Config",
	"formConfig": "Form Config",

	"createCategory": "Create Category",
	"searchCategory": "Search Category",
	"noCategoryNotice": "There is no process category, you can click here to create a process category.",
	"noProcessNoticeNode": "There is no process, you can click here to create a process",

	"activity": "Activity",
	"route": "Route",
	"property": "Property",
	"showJson": "View JSON",
	"unrealized": "Unrealized",
	"tools": "Tools",
	"repetitions": "Duplicate property name",
	"repetitionsValue": "Duplicate content item",
	"repetitionsEvent": "Duplicate event name",
	"repetitionsId": "Duplicate element identifiers",
	"repetitionsOrUnvalid": "Duplicate or invalid property name",
	"notNullId": "Element identifier cannot be null",
	"editCategory": "Edit Category",
	"createProcess": "Create Process",
	"deleteCategory": "Delete Category",
	"deleteProcess": "Delete Process",
	"editProcess": "Edit Process",
	"createForm": "Create Form",
	"deleteForm": "Delete Form",
	"editForm": "Edit Form",

	"menu": {
		"newRoute": "Create Route",
		"newActivity": "Create Activity",
		"newActivityType": {
			"manual": "Manual Activity",
			"condition": "Condition Activity",
			"auto": "Auto Activity",
			"split": "Split Activity",
			"merge": "Marge Activity",
			"embed": "Embed Activity",
			"invoke": "Invoke Activity",
			"begin": "Begin Activity",
			"end": "End Activity"
		},

		"copyActivity": "Copy Activity",

		"deleteActivity": "Delete Activity",
		"deleteRoute": "Delete Route",

		"saveProcess": "Save Process",
		"saveProcessNew": "Save as new process",
		"checkProcess": "Check Process",
		"exportProcess": "Export Process",
		"printProcess": "Print Process",

		"showGrid": "Show Grid",
		"hideGrid": "Hide Grid"
	},
	"notice": {
		"save_success": "Process saved successfully!",
		"deleteForm_success": "Form deleted!",
		"deleteProcess_success": "Process deleted!",
		"one_begin": "There can only be one start activity per process!",
		"deleteRoute": "Are you sure you want to delete the selected route?",
		"deleteRouteTitle": "Delete route confirmation",
		"deleteActivityTitle": "Delete activity confirmation",
		"deleteActivity": "Deleting the activity will also delete all routes associated with this activity, Are you sure you want to delete the selected activity???",
		"deleteDecisionTitle": "Delete decision confirmation",
		"deleteDecision": "Are you sure you want to delete the selected decision?",
		"deleteScriptTitle": "Delete script confirmation",
		"deleteScript": "Are you sure you want to delete the selected script?",
		"deleteElementTitle": "Delete form element confirmation",
		"deleteElement": "Are you sure to delete the current element and its child elements?",
		"deleteEventTitle": "Delete event confirmation",
		"deleteEvent": "Are you sure you want to delete the selected event?",

		"deleteActionTitle": "Delete operation confirmation",
		"deleteAction": "Are you sure you want to delete the selected operation?",

		"deleteRowTitle": "Delete table row confirmation",
		"deleteRow": "Deletes the current row is the row is deleted all the content in the cells, Are you sure to delete the currently selected row?",
		"deleteColTitle": "Delete Table Columns confirmation",
		"deleteCol": "Deletes the current column is the column is deleted all the content in the cells, Are you sure to delete the currently selected column?",

		"deleteProcessTitle": "Delete process confirmation",
		"deleteProcess": "Are you sure you want to delete the selected process?",

		"deleteFormTitle": "Delete form confirmation",
		"deleteForm": "You sure you want to delete the selected form?",

		"deleteTreeNodeTitle": "Delete node confirmation",
		"deleteTreeNode": "Are You sure you want to delete the selected node?",

		"inputScriptName": "Please enter the name of the script!",
		"inputCategoryName": "Please enter the category name of the script!"
	},
	"button": {
		"ok": "Ok",
		"cancel": "Cancel"
	},
	"formAction": {
		"insertRow": "Insert Row",
		"insertCol": "Insert Column",
		"deleteRow": "Delete Row",
		"deleteCol": "Delete Column",
		"mergerCell": "Merge Cells",
		"splitCell": "Split Cells",
		"move": "Move",
		"copy": "Copy",
		"delete": "Delete",
		"add": "Add",
		"script": "Script"
	}
};
o2.LP.desktop = {
	"homepage": "Homepage",
	"taskCenter": "TaskCenter",
	"info": "Information",
	"calendar": "Calendar",
	"profile": "Profile",
	"loadding": "System is loadding, please wait......",
	"lowBrowser": " Your browser version is too low! ~ IE8 and the following versions are not supported!",
	"upgradeBrowser": "Please upgrade your browser???",

	"menuAction": "Menu",
	"configAction": "Configure your workstations",
	"userMenu": "User Options",
	"userChat": "Online Communication",
	"styleAction": "Switch Themes",
	"showDesktop": "Show Desktop",
	"showMessage": "Message",
	"logout": "Logout",
	"userConfig": "Settings",
	"application": "Component",
	"widget": "Widget",
	"process": "Process",
	"nosign": "Edit You Signature",
	"searchUser": "Search???Username",
	"say": "Say",
	"clearMessage": "Clear Message",

	"refresh": "Refresh",
	"close": "Close",
	"closeAll": "Close All",
	"closeOther": "Close Others",

	"lnkAppTitle": "Often Used",
	"deleteLnk": "Delete Link",
	"addLnk": "Add Link",

	"changeViewTitle": "Toggle style confirmation",
	"changeView": "Are you sure you want to switch the style???<br><br>If you select \"OK\", the page will refresh directly, and unsaved data may be lost.",
	"refreshMenu": "Restore the default menu order",
	"defaultMenuTitle": "Confirmation",
	"defaultMenuInfor": "Are you sure you want to restore the ordering and grouping of the menu to the default state???",

	"deleteLink" : "Delete Link",

	"messsage": {
		"appliction": "Application",
		"application": "App",
		"process": "Process",
		"infor": "Info",
		"query": "Data",
		"taskMessage": "Task Reminders",
		"receiveTask": "You get a Task, The title is: ",
		"activity": "Activity",

		"readMessage": "Read Reminders",
		"receiveRead": "You get a Read, The title is: ",

		"reviewMessage": "Review Reminders",
		"receiveReview": "You get a Review, The title is: ",

		"fileEditorMessage": "Received File",
		"receiveFileEditor": "A file sent to you: ",

		"fileShareMessage": "Shared File",
		"receiveFileShare": "shared to you a file: ",

		"meetingInviteMessage": "Meeting Invitation",
		"meetingInvite": "<font style='color: #ea621f'>{person}</font> invite you to attend the meeting in <font style='color: #ea621f'>{date}</font>: Topics is: \"{subject}\"???location: <font style='color: #ea621f'>{addr}</font>",
		"meetingCancelMessage": "Meeting.Canceled",
		"meetingCancel": "<font style='color: #ea621f'>{person}</font> cancelled the meeting on <font style='color: #ea621f'>{date}</font> in <font style='color: #ea621f'>{addr}</font>: \"{subject}\"",
		"meetingAcceptMessage": "Meeting invitation has been accepted",
		"meetingAccept": "<font style='color: #ea621f'>{person}</font> has accepted your meeting invitation, will attend the meeting in <font style='color: #ea621f'>{addr}</font> on <font style='color: #ea621f'>{date}</font>: \"{subject}\"",
		"meetingRejectMessage": "Meeting invitation has been rejected",
		"meetingReject": "<font style='color: #ea621f'>{person}</font> has declined your meeting invitation???Time: <font style='color: #ea621f'>{date}</font>; Subject: \"{subject}\"",

		"attendanceAppealInviteMessage": "There is an attendance claim that needs your approval",
		"attendanceAppealInvite": "{subject}",
		"attendanceAppealAcceptMessage": "Attendance application passed",
		"attendanceAppealAccept": "{subject}",
		"attendanceAppealRejectMessage": "Attendance appeal failed",
		"attendanceAppealReject": "{subject}",

		"canlendarAlarmMessage" : "Schedule",
		"canlendarAlarm" : "{title}",

		"teamwork":{
			"executor":"Assignee",
			"creatorPerson":"Creator"
		},

		"publishDocument" : "Publish document: ",

		"customMessageTitle": "Message: ",
		"customMessage": "You received a message: ",
		"emoji": "Emoji"
	},
	"styleMenu": {
		"default": "default",
		"color": "color",
		"black": "black",
		"lotus": "lotus",
		"crane": "crane",
		"peony": "peony",
		"car": "car",
		"dock": "dock",
		"panda": "panda",
		"star": "star"
	},
	"styleFlatMenu": {
		"blue": "blue",
		"red": "red",
		"orange": "orange",
		"green": "green",
		"cyan": "cyan",
		"purple": "purple",
		"gray": "gray",
		"darkgreen": "darkgreen",
		"tan": "tan",
		"navy": "navy"
	},
	"notice": {
		"unload": "If you close or refresh the current page, the unsaved content will be lost, please confirm your operation",
		"changePassword": "Your password has expired, please change it in time",
		"errorConnectCenter1": "Unable to connect to the Center Server, please make sure one of the following addresses is accessible: ",
		"errorConnectCenter2": "If none of the above addresses can be accessed, please check your network or contact the administrator!"
	},
	"login": {
		"title": "User Login",
		"loginButton": "Login",

		"mobileDownload": "Phone scanning the QR code to install",

		"inputUsernamePassword": "Enter you user name and password...",
		"loginWait": "Login, please wait...",
		"loginError": "User name or password entered is incorrect, please re-enter...",

		"camera_logining": "Logging in, please face the camera ...",
		"camera_logining_1": "Please keep smile ...",
		"camera_logining_2": "Please Look Up ...",
		"camera_logining_3": "Verification Successful ...",

		"camera_logining2": "Please move a different perspective, or transform expression ...",
		"camera_loginSuccess": "{name} Hello, is to sign you in ...",
		"camera_loginError": "Unable to verify your identity, please log in through other means ...",
		"camera_loginError2": "Login failed, please log in through other means ...",
		"camera_loginError_camera": "Unable to open the camera, probably already in use ..."
	},

	"action": {
		"uploadTitle": "Uploading",
		"uploadComplete": "Upload Complete",
		"sendReady": "Encoding the data, prepared for transmission ...",
		"sendStart": "Begin Transfer",
		"sendError": "File Transfer Error",
		"sendAbort": "File transfer was canceled",
		"speed": "Speed",
		"time": "Elapsed Time",
		"hour": "Hour",
		"minute": "Minute",
		"second": "Second",

		"cancelUploadTitle": "Cancel upload confirmation",
		"cancelUpload": "Are you sure you want to cancel uploading file \"{name}\" ?"
	},
	"person": {
		"personEmployee": "Empno",
		"personMobile": "Mobile Number",
		"personMail": "Mail",
		"personDuty": "Duty",
		"personQQ": "QQ",
		"personWeixin": "Weixin",
		"duty": "Duty"
	},
	"collect": {
		"collectNotConnected": "Failed to connect O2 cloud",
		"collectNotConnectedText": "Failed to connect O2 cloud, Please check the server network!"
	}
};
o2.LP.desktop.message = o2.LP.desktop.messsage;
o2.LP.widget = {
	"upload": "Upload",
	"uploadTitle": "Upload File",
	"uploadInfor": "Please select a file to upload",
	"delete": "Delete",
	"replace": "Replace",
	"select": "Select",

	"download": "Download",
	"share": "Share",
	"send": "Ssend",
	"downloadAll": "Download All",
	"createFolder": "Create Folder",
	"rename": "Rename",
	"property": "Property",
	"refuseUpload": "File upload is prohibited",
	"refuseUploadHTML": "<div>The type of attachment named <font style='color:#0000ff'>\"{filename}\"</font> is not allowed to be uploaded and has been excluded</div>",
	"refuseUploadNotice" : "The type of attachment named \"{filename}\" is not allowed to be uploaded",
	"refuseUploadHTML_size" : "<div>The size of the attachment named <font style='color:#0000ff'>\"{filename}\"</font> is too large and has been excluded </font> (Only allow uploading of attachments smaller than {size}M) </div>",
	"refuseUploadNotice_size": "The size of the attachment named \"{filename}\" is too large (Only allow uploading of attachments smaller than {size}M) ",


	"list": "List",
	"sequence": "Sequence",
	"icon": "Icon",
	"preview": "Preview",


	"min": "Simple Mode",
	"max": "Full Mode",

	"size": "Size",
	"uploader": "Uploader",
	"uploadTime": "Time",
	"modifyTime": "Modify",
	"uploadActivity": "Activity",
	"attCount": "File",
	"folderCount": "Folder",

	"pictureSize": "Width {width}px, Height {height}px",
	"pictureRatio": "Image aspect ratio{ratio}",

	"ok": "Ok",
	"cancel": "Cancel",
	"refresh": "Refresh",
	"close": "close",
	"open": "open",
	"choiceWork": "choice document open",
	"workcompleted": "Process completed",

	"months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	"days_abbr": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"clear": "clear",
	"year": ", ",
	"month": " ",
	"date": " ",
	"week": "week",
	"dateGreaterThanCurrentNotice" : "The selected date must be greater than the current date",

	"unknow": "unknow",
	"uploadImg": "uploadImg",
	"clearImg": "Clear Image",
	"clearImg_confirmTitle": "Clear Image confirmation",
	"clearImg_confirm": "Are you sure you want to clear the image???",
	"office": "Open in document Office Control",
	"closeOffice": "Close Attachment",
	"configAttachment": "Set attachment permissions",
	"configAttachmentText": "Config",
	"checkOcrText": "Correct the text in the automatically recognized picture",
	"order": "Attachment Sorting",

	"record": "Record",
	"stop": "Stop",
	"play": "Play",
	"save": "Save",
	"userRefuse" : "The user refuses to provide information.",
	"explorerNotSupportDevice" : "The browser does not support hardware devices.",
	"canNotFindDevice": "Unable to discover the specified hardware device.",
	"canNotOpenMicrophone": "Unable to turn on the microphone. Exception information: ",
	"explorerNotSupportRecordVoice" : "The browser does not support the recording function.",

	"clickToEditCss" : "Click here to write CSS",
	"uploadSuccess": "Uploaded successfully!",
	"uploadFail": "Upload failed, please upload again!",
	"selectLocalImage" : "Choose local picture",
	"selectCloudImage": "Choose server picture",
	"reset": "Reset",
	"uploadOriginalImage": "Upload Original Image",

	"startRecord" : "Start Recording",
	"completeRecord": "Stop Recording",
	"requireHttps" : "Video recording function must use https protocol",
	"canNotToRecordVideo" : "The video recording function cannot be used. Your browser does not support the following features:",

	"pageJumperTitle": "Enter the page number",

	"scriptAreaEditNotice" : "Click here to write script code",
	"empty" : "Clear",
	"undo" : "Undo",
	"redo" : "Redo",
	"thickness" : "Thickness",
	"color" : "Color",
	"insertImage" : "Insert Image",
	"imageClipper" : "Crop Image",

	"explorerNotSupportFeatures" : "Your browser does not support the following features:"
};

o2.LP.widget.SimpleEditor = {
	"insertEmotion": "Insert Expressions",
	"insertImage": "Insert Image",
	"Emotions": "regular_smile|smile???teeth_smile|laugh,angry_smile|angry,confused_smile|confuse,cry_smile|cry,embaressed_smile|awkward,omg_smile|Surprised,sad_smile|sad,shades_smile|cool,tounge_smile|Tongue out,wink_smile|wink,angel_smile|angel,devil_smile|devil,heart|heart,broken_heart|Broken heart,thumbs_up|up,thumbs_down|down,cake|cake,lightbulb|light,envelope|envelope"
};
o2.LP.authentication = {
	"LoginFormTitle": "Welcome",
	"SignUpFormTitle": "Welcome",
	"ResetPasswordFormTitle": "Retrieve Password",
	"ChangePasswordFormTitle" : "Password has expired",
	"userName": "Username",
	"password": "Password",
	"verificationCode": "CAPTCHA",
	"loginAction": "Login",
	"autoLogin": "The next automatic landing",
	"signUp": "Registration",
	"forgetPassword": "Forgot Password???",
	"inputYourUserName": "Enter your username",
	"inputYourPassword": " Enter your password",
	"inputYourMail": "Please input your e-mail adresse",
	"inputYourMobile": "Please Input your Mobile Number",
	"inputPicVerificationCode": "Please enter the verification code on the right",
	"inputComfirmPassword": "Please confirm your password",
	"inputVerificationCode": "Verification Code",
	"confirmPassword": "Confirm Password",
	"sendVerification": "Send",
	"resendVerification": "ReSend",
	"passwordIsSimple": "Please use alphanumeric mix and at least 7 bits",
	"mobileIsRegisted": "Mobile phone number has been registered",
	"mailFormatError": "Please enter a properly formatted email",
	"hasAccount": "Already have an account???",
	"gotoLogin": "Goto Login",
	"weak": "weak",
	"middle": "middle",
	"high": "high",
	"userExist": "User already exists",
	"userNotExist": "The user does not exist.",
	"passwordNotEqual": "The password is inconsistent with the above, please try again",
	"changeVerification": "Change",
	"mail": "mail",
	"genderType": "Gender",
	"genderTypeText": ",Male, Female",
	"genderTypeValue": ",m,f",
	"selectGenderType": "Please select Gender",
	"registeSuccess": "Registration Successful",
	"codeLogin": "SMS Login",
	"passwordLogin": "Password Login",
	"bindLogin": "QRCode Login",
	"bingLoginTitle": "Scanning the QR code",
	"o2downloadLink": "https://sample.o2oa.net/app/download.html",
	"loginSuccess": "Login Success!",
	"userCheck": "Authentication",
	"shotMessageCheck": "SMS Verification",
	"setMewPassword": "Set New Password",
	"completed": "Completed",
	"nextStep": "Next",
	"mobile": "Cellphone",
	"setNewPassword": "Set New Password",
	"confirmNewPassword": "Confirm New Password",
	"passwordIsWeak": "Password length must be greater than 7",
	"resetPasswordSuccess": "Password Reset successful!",
	"resetPasswordFail": "Failed to reset your password!",
	"resetPasswordSuccessWord": "Please remember your new password.",
	"resetPasswordFailWord": "Please check your username and message authentication codes.",
	"backtoModify": "Return for correction",
	"pageNotFound": "404 error, the service was not found or the server has been disconnected",
	"submitAction" : "OK",
	"oldPassword" : "Old Password",
	"inputYourOldPassword" : "Enter the original password",
	"newPassword" : "New Password",
	"inputYourNewPassword" : "Enter a new password",
	"changePasswordSuccess" : "Successfully change password",
	"userAppCameraHtml" : "<div>open <div styles='bindTipLinkArea'>APP </div> and scan</div>",
	"loginToPage": "Login to the page"

};
o2.LP.script = {
	"error": "Script operation error, please check the following details"
};

MWF.xApplication = MWF.xApplication || {};
MWF.xApplication.process = MWF.xApplication.process || {};
MWF.xApplication.process.Work = MWF.xApplication.process.Work || {};
MWF.xApplication.process.Work.LP = {
	"title": "Work",
    "selectRoute": "Select Route",
    "inputOpinion": "Input Opinion",
    "selectPerson" : "Select Person",
    "cancel": "Cancel",
    "ok": "Submit",
    "close": "Close",
    "saveWrite": "Save",
    "inputText": "Input process opinion here",

    "mustSelectRoute": "Please choose decision",
    "mustSelectRouteGroup" : "Please select the decision group",
    "opinionRequired" : "Please input process opinion",

    "searchKey": "Please enter key words",

    "task": "Task",
    "done": "TaskCompleted",
    "draft": "Draft",
    "myfile": "Myfile",
    "reset": "Reset",
    "reroute": "Reroute",
    "addSplit": "Addsplit",
    "rollback": "Rollback",

    "phone": "Phone",
    "mail": "Mail",
    "save": "Save",
    "process": "Flow",
    "handwriting": "Handwriting",
    "audioRecord": "Record",

    "noAppendTaskIdentityConfig" : "No transferor is configured, please contact the administrator",
    "selectAppendTaskIdentityNotice" : "Please select the transferor",
    "routeValidFailure" : "Route verification failed",
    "loadedOrgCountUnexpected" : "The personnel selection interface has not been loaded, please wait...",

    "taskCompletedPerson": "?????????",
    "readPerson": "Reader",
    "systemFlow": "Automatic processing",

    "rollbackConfirmTitle": "Rollback confirmation",
    "rollbackConfirmContent": "Are you sure you want to rollback the process back to the \"{log}\" state? (Process rollback will clear all information after this state)",

    "recoverFileConfirmTitle": "Recover text confirmation",
    "recoverFileConfirmContent": "Are you sure you want to restore the text to the \"{att}\" version? (After restoring, the saved temporary files will be deleted and you cannot restore them again)",

    "notRecoverFileConfirmTitle": "Cancel text recovery confirmation",
    "notRecoverFileConfirmContent": "Are you sure you want to cancel the body recovery? (After canceling, the saved temporary files will be deleted and you cannot restore it again)",

    "closePageCountDownText": "The page will be closed in \"{second}\" seconds!",
    "closePage": "Close",

    "selectRouteGroup": "Select Decision Group",
    "defaultDecisionOpinionName": "Other",
    "routeGroupOrderList": ["Agree","Disagree","Other","Other"],

    "selectWork": "The file you want to open has formed multiple branches, please select one to view:",
    "currentActivity": "Current Activity: ",
    "currentUsers": "Current processor: ",
    "completedWork": "File processing completed",

    "managerProcessNotice": "Note: The quick processing function is suitable for the following situations: <br\>1, the required items have been filled in the form.<br\>2, there is no need to select a person when submitting.<br \>3. There is no content calculated based on user identity.<br\>You are an administrator, you can simulate a person and submit.",
    "managerLogin": "Simulate login and open file",
    "managerLoginConfirmTitle": "Simulated Login",
    "managerLoginConfirmContent": "Are you sure you want to log in as {user} and open the file? After clicking OK, you need to log out and log in again to return to the current user.",
    "managerLoginSuccess": "Successfully switched to {user}"
};
MWF.xApplication.process.Work["lp."+o2.language] = MWF.xApplication.process.Work.LP;

MWF.xApplication.process = MWF.xApplication.process || {};
MWF.xApplication.process.Xform = MWF.xApplication.process.Xform || {};
MWF.xApplication.process.Xform.LP = {
    "ok": "OK",
	"deleteDatagridLineTitle":"Delete item confirmation",
    "deleteDatagridLine": "Are you sure you want to delete the current item?",

    "cancelDatagridLineEditTitle": "Cancel Data Grid Edit Confirmation",
    "cancelDatagridLineEdit": "Are you sure to cancel editing the data grid?",

    "datagridImport": "Import Excel",
    "datagridExport": "Export Excel",
    "exportDefaultName": "DataGrid",
    "datatemplateExportDefaultName": "DataTemplate",
    "datatableExportDefaultName": "DataTable",
    "importSuccess": "Import successful!",
    "validationInfor": "Verification Information",
    "importFail": "Import failed",
    "importValidationColumnText": "Column {n}:",
    "importValidationColumnTextExcel": "Column {n}:",
    "notValidNumber": "Not a number",
    "notValidDate": "Not a date format",
    "fullstop": ".",
    "notExistInSystem": "Does not exist in the system",
    "uploadedFilesCannotHaveSpaces": "Uploaded files cannot contain spaces",

    "browserNotActiveX": "Your browser does not support ActiveX, Office controls cannot be loaded, please use Internet Explorer",

    "activity": "activity",
    "dataSaved": "Data saved successfully",
    "taskProcessed": "File has been submitted",
    "taskProcessedMessage": "You processed a task: ",
    "nextActivity": "Next Activity: ",
    "nextUser": "Processor: ",
    "arrivedActivitys": "arrived activities ",
    "arrivedUsers": "arrived user ",
    "replace": " instead ",
    "next_etc": " {count} people",

    "processStarted": "Job has been started",
    "processStartedMessage": "You started a new job: ",

    "draftStart": "Process has been started",

    "taskCompleted": "Task has been processed",
    "workCompleted": "Work has been completed",
    "arrivedActivity": "Work has arrived activity: ",
    "workProcess": "Flow to",
    "close": "Close",
    "retract": "Retract",
    "reroute": "Reroute",
    "rerouteTo": "RerouteTo",
    "rollback": "Process rollback",
    "rollbackTo": "Process rollback to",
    "selectRollbackActivity": "Select the location of the file to be rollback to:",
    "tryToProcess": "try to continue flow",
    "in": " in ",

    "andSoForth" : "...",

    "noIdentitySelectRange": "Cannot determine the range of identity selection",
    "noIdentityDutySelectRange": "Unable to determine the range of duty selection",
    "noUnitSelectRange": "Cannot determine the selection range of the unit",
    "noSelectRange": "Cannot determine the selection range",
    "noSelectType": "The selection type is not set",
    "selectRoute": "Select Route",
    "submitAt": " Submit At ",
    "idea": " Opinion ",
    "processing": " Processing ",
    "comeTime": "Arrival Time ",
    "begin": " begin ",
    "end": " end ",
    "none": " none ",
    "empower": " empower ",

    "person": " Person ",
    "department": " Department ",
    "startTime": " Received time ",
    "completedTime": " Processing Time ",
    "route": " route ",
    "opinion": " Opinion ",

    "systemProcess": "System Process",
    "showProcess": "Show Process",

    "deleteAttachmentTitle":"Delete attachment confirmation",
    "deleteAttachment": "Are you sure you want to delete the attachments you selected?",

    "sendTaskNotice": "A reminder has been sent to the task person: {users}",
    "setReadedConfirmContent": "Are you sure you want to mark \"{title}\" as readed?",
    "setReadedConfirmTitle": "Mark as readed confirmation",

    "replaceAttachmentTitle": "Replace Attachment Confirmation",
    "replaceAttachment": "Are you sure you want to replace the attachment you selected?",
    "uploadMore": "You can only upload {n} attachments",
    "notValidation": "Data validation failed",
    "notValidation_number": "Only allow numbers",

    "retractTitle": "Retract Confirmation",
    "retractText": "Are you sure you want to retract this document?",
    "workRetract": "The document has been retract",
    "retractWorkInfor": "You retract the document:",

    "currentActivity": "Current Activity:",
    "currentUser": "Processor:",

    "inputResetPeople": "Please select the person to reset to!",
    "resetTo": "Reset To",
    "reset": "Reset",
    "resetOk": "Document has been reset to",
    "workReset": "Document has been reset",
    "resetWorkInfor": "You reset the document:",

    "workRollback": "Document has been backtracked",
    "rollbackOk": "Document has been backtracked to",
    "rollbackWorkInfor": "You have backtracked the document:",

    "workReroute": "Document has been rerouted",
    "rerouteWorkInfor": "You rerouted a document:",
    "rerouteOk": "Document has been rerouted to:",

    "inputSplitValue": "Please enter or choose to increase the value of the branch",
    "addSplitOk": "The processing branch has been added:",
    "addSplitWork": "Processing branch has been added",
    "addSplitWorkInfor": "You have added a branch to the current work",

    "deleteWorkTitle": "Delete work confirmation",
    "deleteWorkText": {"html": "<div style='color: red;'>Note: You are deleting this work, and the work cannot be retrieved after deletion. Are you sure you want to delete this work?</div>" , "text": "Note: You are deleting this work. The work cannot be retrieved after deletion. Are you sure you want to delete this work?"},
    "workDelete": "Work has been deleted",
    "amount": "???Total",
    "delete": "Delete",
    "add": "Add",
    "addLine": "AddLine",
    "edit": "Edit",
    "completedEdit": "Completed",
    "cancelEdit": "Cancel",
    "mobileGridHelp": "Long press the data area to edit the data<br>Swipe to the left to delete the data",
    "item": "???Item",
    "all": "All",
    "imageClipper": "Image Editor",
    "noOrgObject": "Unmatched person or organization, click to modify",

    "menu_revisions_show": "ShowTraces",
    "menu_revisions_hide": "HideTraces",
    "menu_fullscreen": "Fullscreen",
    "menu_toolbar_show": "ShowToolbar",
    "menu_toolbar_hide": "HideToolbar",
    "menu_preview": "PrintPreview",
    "menu_redfile": "Red File",
    "menu_seal": "Seal",
    "menu_showHistory": "View history",
    "menu_hideHistory": "Close history",
    "menu_new": "Create Document",
    "menu_openfile": "Open local file",
    "menu_savefile": "Save to local",
    "menu_att": "View Attachment",
    "menu_file": "Open",
    "completed": "Completed",
    "openOfficeInfor": "Click here to open the {type} file",
    "seeVersion": "See Version",
    "selectVersionToRestore": "Please select the text version to be restored:",
    "restoreFile": "Restore",
    "installNTKOWebChromePluginNotice_xpi": "NTKO Web Chrome cross-browser plugin has not been installed. Please click <a href=\"../o2_lib/officecontrol/ntkoplugins.xpi\">install components</a>",
    "installNTKOWebChromePluginNotice_crx": "NTKO Web Chrome cross-browser plugin has not been installed. Please click <a href=\"../o2_lib/officecontrol/ntkoplugins.crx\">install components</a>",

    "showReadCompletedTitle": "Readed Person ",
    "showReadTitle": "Reader",
    "worklogRead": "View read",
    "mediaOpinion_image": "Handwritten Opinion",
    "mediaOpinion_video": "Video Opinion",
    "mediaOpinion_voice": "Voice Opinion",

    "attachmentPermission": "Set attachment permission",
    "attachmentPermissionInfo": "You are setting permissions for the following attachments:",
    "attachmentRead": "Who can view this attachment: (If blank, anyone can read this document)",
    "attachmentEdit": "Who can edit this attachment: (If blank anyone can edit this document)",
    "attachmentController": "Who can set permissions of this attachment: ",

    "attachmentOCRTitle": "Correct the text in the automatically recognized picture",
    "attachmentOCR_saved": "Image text recognition results have been saved",

    "attachmentOrderTitle": "Attachment Order",
    "attachmentOrderUp": "Up",
    "attachmentOrderDown": "Down",
    "attachmentOrderInfo": "Drag the attachment icon, or sort the attachments through the \"Up\" and \"Down\" buttons",

    "autosave": "Auto Save Document",

    "ignore": "Ignore",
    "ANNInput": "Smart input suggested value: ",

    "recover": "Recover Text",
    "notRecover": "Cancel body recovery",

    "doublePage": "Double",
    "singlePage": "Single",
    "editdoc": "EditText",
    "editdocCompleted": "EditComplete",
    "printdoc": "Print",
    "history": "Text Trace",
    "fullScreen": "FullScreen",
    "returnScreen": "Restore",

    "editdoc_mobile": "Edit",
    "editdocCompleted_mobile": "EditComplete",
    "printdoc_mobile": "Print",
    "history_mobile": "Trace",


    "subformNestedError": "This form has nested subforms, please contact the administrator!",
    "subpageNestedError": "There are nested subpages on this page, please contact the administrator!",

    "subformUniqueError": "The form is embedded with the same subform repeatedly, please contact the administrator!",
    "moduleUniqueError": "The form has a field with the same name, please contact the administrator!",

    "selectEmpower": "Authorized personnel selection",
    "empowerDlgText": "The following personnel have empowered the work, the file will be sent to the empowered person after selection, and the file will be sent to the task person after deselecting",
    "empowerTo": "Empower to",
    "empowerToHtml": "<font style='color:#ff5400;'>{person}</font>({department}) empowered to <font style='color:#ff5400;'>{empowerTo}</font> Processing. ({time})</font>",
    "selectAll": "Select All",
    "computePage": "Calculating page breaks, please wait...",
    "keyLockTitle": "File editing is locked",
    "keyLockInfor": "The file is being edited by {name}. You can view the contents of the document and refresh the page to try again later.",

    "year" : " Year ",
    "month" : " Month ",
    "date" : " ",

    "documentEditor": {
        "copies": "",
        "secret":"",
        "priority": "",
        "redHeader": "????????????",
        "fileno":"[??????]",
        "signerTitle": "????????????",
        "signer": "[?????????]",
        "subject": "[??????]",
        "mainSend": "[???????????????]",
        "filetext": "[??????????????????????????????]",
        "attachmentTitle":"?????????",
        "attachment":"[??????]",
        "issuanceUnit":"[????????????]",
        "issuanceDate":"[????????????]",
        "annotation":"",
        "copytoTitle":"?????????",
        "copyto":"[??????]",
        "editionUnit":"[????????????]",
        "editionDate":"[????????????]",
        "historyList": "??????????????????"
    },
    "documentHistory": {
        "diffContent": "<div>{time}</div>{name} modified content at \"{activity}\"",
        "insertContent": "<div>{time}</div>{name} inserted content at \"{activity}\":",
        "deleteContent": "<div>{time}</div>{name} deleted content at \"{activity}\":",
        "insert": " Insert ",
        "delete": " Deleted ",
        "insertTimes": " Insert at {times} ",
        "deleteTimes": " Deleted {times} ",

        "play": "Play",
        "pause": "Pause",
        "stop": "Stop",
        "next": "Next Modification Record",
        "prev": "Previous Modification Record",
        "exit": "Exit Trace Review",

        "diff_patch_count": "Total {history} versions, {diff} revisions.",
        "original": "Original Version",
        "nodiff": "There is no historical modification information yet",
        "word": " word ",
        "diff": "Contrast",
        "diffTitle": "Compared with the previous version"
    },
    "subjectEmpty": "Subject cannot be empty",
    "issuanceUnitEmpty": "The issuing unit cannot be empty",
    "fullWidth": "The automatic conversion of half-width spaces to full-width spaces is enabled. If you need to enter half-width spaces, please use: SHIFT+space",

    "pauseWork": "The current task has entered the pending state",
    "resumeWork": "The current task has been resumed from the pending state",

    "resume": "Resume",
    "pause": "Pending",

    "selectItemCountNotice": "Please select at least {count} items",
    "setReaded": "Mark as read",
    "readed": "Readed",

    "attachmentArea": "Attachments",
    "intelligentCorrection": "Intelligent Error Correction",

    "maxItemCountNotice": "A maximum of {n} items allowed to be added",
    "selectItemNotice": "Please select item",
    "minItemNotice": "At least {n} items need to be kept. The deleted item is less than the item to be kept, please check",
    "deleteSelectedItemNotice": "Are you sure you want to delete the selected item",
    "minItemCountNotice": "Please keep at least {n} items",
    "systemField": "System Field",
    "systemFieldEmptyNotice": "System Field cannot be empty",
    "importTooManyNotice ":" you import {n1} data, allowed to import {n2} data maximum ",
    "importTooFewNotice ": "you import {n1} data, need to keep at least {n2} data ",

    "form": {
        "close":"Close",
        "closeTitle": "Close Document",
        "save": "Save",
        "saveTitle": "Save Document",
        "flow": "Flow",
        "flowTitle": "Flow Document",
        "reroute": "Reroute",
        "rerouteTitle": "Reroute to other Activity",
        "reset": "Reset",
        "resetTitle": "Reset to other Person",
        "split": "AddSplit",
        "splitTitle": "Add Split Work branch",
        "retract": "Retract",
        "retractTitle": "Retract Task to current person",
        "rollback": "Rollback",
        "rollbackTitle": "Rollback the work to the specified activity, without keeping process records",
        "delete": "Delete",
        "deleteTitle": "Delete Document",
        "print": "Print",
        "printTitle": "Open through the print form, and print the document",
        "press": "Urge",
        "pressTitle": "Urge",
        "pause": "Pending",
        "pauseTitle": "Set the task as pending",
        "resume": "Resume",
        "resumeTitle": "Resume the task from pending",
        "downloadAll": "Download",
        "downloadAllTitle": "Download the form and all attachments",

        "rerouteActivity": "Activity: ",
        "reroutePerson": "Person: ",
        "selectPerson": "Select",
        "retouteOpinion": "Opinion: ",

        "resetPerson": "Person: ",
        "resetOpinion": "Opinion: ",
        "keepTask": "Keep my task",

        "readedOpinion": "Opinion: ",

        "rollbackInfo": "Select the location of the file to be rollback to",
        "addSplitInfo": "Split data according to your business settings. The data should match the split setting in the process. multiple values with a comma (,)",
        "selectUnit": "Select Unit",
        "excludeBranches": "Exclude existing branches",
        "yes": "Yes",
        "no": "No"
    }

};
MWF.xApplication.process.Xform["lp."+o2.language] = MWF.xApplication.process.Xform.LP;

MWF.xApplication.Selector=MWF.xApplication.Selector||{};
MWF.xApplication.Selector.LP = MWF.SelectorLP = {
    "title": "Select",
    "multiSelectTitle": "Select",
    "selectPerson": "Select Person",
    "selectIdentity": "Select Identity",
    "selectUnit": "Select Unit",
    "selectGroup": "Select Group",
    "selectRole": "Select Role",
    "selectDuty": "Select Duty",
    "selectField": "Select Field",
    "selectFile": "Select Resource File",
    "selectAppliction": "Select Process Application",
    "selectProcess": "Select Process",
    "selectView": "Select View",
    "selectStatement": "Select Statement",
    "selectTable": "Select Data Table",
    "selectList": "Select List",
    "selectFormStyle": "Select Form Style",
    "selectCMSApplication": "Select CMS Application",
    "selectCMSCategory": "Select CMS Category",
    "noSelectableItemText": "No option to be selected",
    "selectScript": "Select Script",
    "selectDictionary": "Select Data Dictionary",
    "selectImportModel": "Select Import Module",

    "searchDescription" : "search",

    "waitingSelect": "To be selected",
    "selected" : "Selected",
    "empty" : "Empty",

    "identity" : "Identity",
    "person" : "Person",
    "application" : "Application",
    "CMSApplication" : "Application",
    "CMSCategory" : "Category",
    "CMSFormField" : "Field",
    "formField" : "Field",
    "process" : "Process",
    "role" : "Role",
    "group" : "Group",
    "unit" : "Unit",
    "systemList": "System List",

    "appType" : {
        "process": "Process",
        "cms": "CMS",
        "portal": "Portal"
    },

    "cancel": "Cancel",
    "back": "Back",
    "ok": "Ok",
    "noPerson": "User ???{name}??? not exist",

    "processPlatform": "Process Platform",
    "cms": "Content Management",
    "portal": "Portal Management",
    "query": "Data Center",
    "service": "Service Management",

    "systemStyle": "System Style",
    "customStyle": "Custom Style (Script)",
    "selectAll": "Select All",
    "selectChildren": "Select all children",
    "selectItemMaxText": "Select at most {count} options",
    "service1": "Service",
    "agent": "Agent"
};
MWF.xApplication.Selector["lp."+o2.language] = MWF.xApplication.Selector.LP;

o2.xApplication.Template = o2.xApplication.Template || {};
o2.xApplication.Template.LP = {
	"title": "Template",
	"delete": "Delete",
	"deleteDocumentTitle": "Delete Confirmation",
	"deleteDocument": "Are you sure you want to delete this information?",
	"deleteDocumentOK": "Delete successfully",
	"createSuccess": "Created successfully",
	"updateSuccess": "Update successful",
	"inputName": "Please enter a name",

	"dateFormatMonth": "%Y-%m",
	"dateFormatOnlyMonth": "%m",
	"dateFormatDay": "%Y-%m-%d",
	"dateFormatMonthDayLocal": "%m-%d",
	"dateFormat": "db",

	"month": "month",
	"today": "Today",
	"day": "day",

	"cancel": "Cancel",
	"ok": "OK",

	"name": "Name",
	"create_cancel_title": "Cancel New Confirmation",
	"create_cancel": "Are you sure you want to cancel the new creation?",

	"index": {

	},

	"explorer": {
		"returnText": "Return to home page",
		"pageJumperText": "Enter the page number and press enter to jump",
		"prePage": "Previous Page",
		"nextPage": "Next Page"
	},

	"MDomItem": {
		"emptyTip": "{text} cannot be empty",
		"emailTip":"Please enter an email in the correct format",
		"urlTip":"Please enter a valid URL",
		"phoneNumberTip" :"Please enter the correct phone number",
		"dateTip":"Please enter a valid date",
		"dateISOTip":"Please enter a valid date.",
		"numberTip":"Please enter a valid number",
		"digitsTip":"Only integers can be entered",
		"maxlengthTip":"The length cannot exceed {n}",
		"minlengthTip":"The length cannot be less than {n}",
		"rangelengthTip":"The length cannot be between {n0} and {n1}",
		"rangeTip":"Please enter a value between {n0} and {n1}",
		"minTip":"Please enter a minimum value of {n}",
		"maxTip":"Please enter a value up to {n}",
		"extensionTip":"Please upload an attachment in {text} format",
		"defaultTip" :"Please enter the correct {text}",
		"selectTip": "Please select {text} first",
		"defaultOption": "Please choose",
		"setPicture": "Set Picture",
		"uploadPictureNotice": "Please upload a picture first",
		"selectCoundPicture": "Select Cloud File Picture"
	},

	"MGrid": {
		"sequence": "Sequence Number",
		"add": "Add",
		"delete": "Delete",
		"addMaxLimitText": "You can only add up to {count} items"
	},

	"MPopupForm": {
		"close": "Close",
		"max": "Maximize",
		"restore": "Restore"
	}
};
MWF.xApplication.portal = MWF.xApplication.portal || {};
MWF.xApplication.portal.Portal = MWF.xApplication.portal.Portal || {};
MWF.xApplication.portal.Portal.LP = {
	"title": "Portal"
};
MWF.xApplication.portal.Portal["lp."+o2.language] = MWF.xApplication.portal.Portal.LP;

MWF.xApplication.cms = MWF.xApplication.cms || {};
MWF.xApplication.cms.Document = MWF.xApplication.cms.Document || {};
MWF.xApplication.cms.Document.LP = {
    "title": "Document",
    "selectRoute": "Select Decision",
    "inputOpinion": "Fill in Opinion",
    "comfirm": "Confirm",
    "close": "Close",
    "cancel": "Cancel",
    "ok": "Submit",
    "inputText": "Please fill in the process comments here",

    "mustSelectRoute": "Please select the decision first",

    "searchKey": "Please enter a keyword",

    "task": "To-Do Center",
    "done": "Done Center",
    "draft": "Draft Box",
    "myfile": "My File",
    "reset": "Reset the processor",

    "phone": "Mobile",
    "mail": "Mailbox",

    "documentGettedError": "Document GettedError",
    "controllerGettedError": "Administrator GettedError",
    "formGettedError": "Form GettedError",
    "attachmentGettedError": "Attachment GettedError",
    "formNotSetted": "FormNotSetted",

    "attachmentArea": "Attachment Area",
    "selectAttachment": "Select Attachment",

    "hotPicture": "Hot Picture",
    "cancelHotPicture": "Cancel hotspot",
    "setHotPicture": "Set HotPicture",
    "setHotLinkSuccess": "Set hotspot picture successfully",
    "cancelHotLinkSuccess": "Cancel hotspot picture success",
    "selectDocPicture": "Select Document Picture",
    "selectFilePicture": "Select Cloud File Picture",
    "hotLinkDescription": "Note: The selected picture will be used as the top picture of the mobile APP on this platform, and the best aspect ratio of the picture is 1:2",
    "unselectHotPic": "Please select a picture first",
    "cancelHotPicComfirmTitle": "Cancel Hotspot",
    "cancelHotPicComfirmContent": "Are you sure to cancel the hot spot of this document?"
};
MWF.xApplication.cms.Document["lp."+o2.language] = MWF.xApplication.cms.Document.LP;
MWF.xApplication.process = MWF.xApplication.process || {};
MWF.xApplication.process.Xform = MWF.xApplication.process.Xform || {};
MWF.xDesktop.requireApp("process.Xform", "lp."+MWF.language, null, false);
MWF.xApplication.cms = MWF.xApplication.cms || {};
MWF.xApplication.cms.Xform = MWF.xApplication.cms.Xform || {};
MWF.xApplication.cms.Xform.LP = Object.merge({},  MWF.xApplication.process.Xform.LP, {
    "dataSaved": "Data saved successfully",
    "documentPublished": "Published successfully",


    "noSelectRange": "Cannot determine the selection range",

    "begin": "begin",
    "end": "end",
    "none": "None",

    "person": "Personnel Name",
    "department": "Unit",
    "firstDate": "First reading time",
    "readDate": "Recent reading time",
    "readCount": "Number of Readings",
    "startTime": "Received time",
    "completedTime": "Processing Time",
    "opinion": "Opinion",

    "systemProcess": "System Process",

    "deleteAttachmentTitle":"Delete attachment confirmation",
    "deleteAttachment": "Are you sure you want to delete the attachment you selected?",

    "replaceAttachmentTitle": "Replace Attachment Confirmation",
    "replaceAttachment": "Are you sure you want to replace the attachment you selected?",
    "uploadMore": "You can only upload up to {n} attachments",
    "notValidation": "Data validation failed",

    "deleteDocumentTitle": "Confirm Delete Document",
    "deleteDocumentText": {"html": "<div style='color: red;'>Note: You are deleting this document, and the document cannot be retrieved after deletion. Are you sure you want to delete this document?</div>"},
    "documentDelete": "Document has been deleted",

    "readerFieldNotice": "If not selected, all members will be visible",

    "readedLogTitle": "Reading Log",
    "readedCountText": "Total {person} people, {count} reads",
    "defaultReadedLogText": "<font style='color:#00F;'>{person}</font>({department}) read in <font style='color:#00F'>{date}</font>, A total of <font style='color:#00F'>{count}</font> times",

    "reply": "Comment",
    "commentTitle": "Comment Area",
    "commentCountText": "Total {count} comments",

    "saveComment": "Comment",
    "saveCommentSuccess": "Save Comment Success",
    "deleteCommentTitle": "Delete Comment Confirmation",
    "deleteCommentText": "After deleting a comment, it cannot be restored. Are you sure you want to delete this comment?",
    "deleteCommentSuccess": "Comment deleted successfully",
    "commentFormTitle": "Edit Comment",
    "createCommentSuccess": "Comment created successfully",
    "updateSuccess": "Update successful",
    "save": "Save",

    "attachmentArea": "Attachment Area",
    "selectAttachment": "Select Attachment",

    "yesterday": "yesterday",
    "theDayBeforeYesterday": "The Day Before yesterday",
    "severalWeekAgo": "{count}weeks ago",
    "severalDayAgo": "{count} days ago",
    "severalHourAgo": "{count}hours ago",
    "severalMintuesAgo": "{count} minutes ago",
    "justNow": "JustNow",
    "form": {
        "close":"Close",
        "closeTitle": "Close Document",
        "edit": "Edit",
        "editTitle": "Edit Document",
        "save": "Save",
        "saveTitle": "Save Document",
        "publish": "Publish",
        "publishTitle": "Publish Document",
        "saveDraft": "Save Draft",
        "saveDraftTitle": "Save Draft",
        "popular": "Set focus document",
        "popularTitle": "Set as focus document",
        "delete": "Delete",
        "deleteTitle": "Delete Document",
        "print": "Print",
        "printTitle": "Print Document"
    }
});
MWF.xApplication.cms.Xform["lp."+o2.language] = MWF.xApplication.cms.Xform.LP;