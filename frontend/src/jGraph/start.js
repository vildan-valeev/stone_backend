import mxJSColor from './jscolor/jscolor.js'
import Base64 from './deflate/base64.js'
import {RESOURCE_BASE} from './js/Init'

import {mxClient, mxUtils, mxEventSource, mxPopupMenu, mxGraphView, mxGraph, mxGraphHandler, mxConnectionHandler, mxPopupMenuHandler, mxResources} from './jGraphLib/mxClient'
import EditorUi from './js/EditorUi'

import Editor from './js/Editor'
import {Graph} from './js/Graph.js'
import Actions from './js/Actions.js'

export default function Run() {
  var bundle = mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
      mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

    // Fixes possible asynchronous requests
    mxUtils.getAll([bundle, STYLE_PATH + '/default.xml'], function(xhr)
    {
      // Adds bundle text to resources
      mxResources.parse(xhr[0].getText());
      
      // Configures the default graph theme
      var themes = new Object();
      themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement(); 
      
      // Main
      new EditorUi(new Editor(urlParams['chrome'] == '0', themes));
    }, function()
    {
      document.body.innerHTML = '<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
    });
}