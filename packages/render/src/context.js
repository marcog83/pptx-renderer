import PPTxgen from 'pptxgenjs';

export class Pptxgen {
  constructor(props) {
    this.pres = new PPTxgen();
    this.pres.author = props.author;
    this.pres.company = props.company;
    this.pres.revision = props.revision;
    this.pres.subject = props.subject;
    this.pres.title = props.title;
    this.pres.layout = props.layout;
  }

  addSlide({ masterName, sectionTitle, ...props }) {
    this.slide = this.pres.addSlide({ masterName, sectionTitle });
    this.slide.background = props.background;
    this.slide.color = props.color;
    this.slide.fontSize = props.fontSize;
  }

  addSlideNumber(props) {
    this.slide.slideNumber = props;
  }

  addText(children, options) {
    this.slide.addText(children, options);
  }

  addImage(props) {
    this.slide.addImage(props);
  }

  /**
   * pptGenJS reference for Media
    // Path: full or relative
    slide.addMedia({ type: "video", path: "https://example.com/media/sample.mov" });
    slide.addMedia({ type: "video", path: "../media/sample.mov" });

    // Base64: pre-encoded string
    slide.addMedia({ type: "audio", data: "audio/mp3;base64,iVtDafDrBF[...]=" });

    // YouTube: Online video (supported in Microsoft 365)
    slide.addMedia({ type: "online", link: "https://www.youtube.com/embed/Dph6ynRVyUc" });

    More Info - https://gitbrent.github.io/PptxGenJS/docs/api-media/
   */
  addMedia(props) {
    // const { type, path, data, link } = props;

    console.log(props);
    this.slide.addMedia(props);
  }

  addShape(node,options) {
    if (node.hasText) {
      this.addText(node.children, options);
    } else {
      const { type} = node.props;
      this.slide.addShape(type, options);
    }
  }

  addNotes(text) {
    this.slide.addNotes(text);
  }

  addSection({ title }) {
    this.pres.addSection({ title });
  }

  getLayout(){
    return this.pres.presLayout;
  }

  writeFile({ fileName }) {
    return this.pres.writeFile({ fileName });
  }

  write(...params) {
    return this.pres.write(...params);
  }
}
