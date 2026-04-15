var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "[section]",
  "number": "1",
  "title": "7.0 — Review",
  "body": " 7.0 — Review  A prerequisite for applying a strategy is a knowledge of the basic integration formulas. In the following table we have collected the integrals from our previous list together with several additional formulas that we have learned in this chapter. Most of them should be memorized.   Table of Integration Formulas                                     Constants of integration are omitted.  "
},
{
  "id": "root-1-1-2-3",
  "level": "2",
  "url": "root-1-1-2.html#root-1-1-2-3",
  "type": "[table]",
  "number": "1.1",
  "title": "",
  "body": " Table of Integration Formulas                                    "
},
{
  "id": "root-1-1-2-4",
  "level": "2",
  "url": "root-1-1-2.html#root-1-1-2-4",
  "type": "[remark]",
  "number": "1.2",
  "title": "",
  "body": "Constants of integration are omitted. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
