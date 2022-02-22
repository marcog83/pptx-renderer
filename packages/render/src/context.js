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
    console.log('addSlide', masterName, sectionTitle, props);
    this.slide = this.pres.addSlide({ masterName, sectionTitle });
    this.slide.background = props.background;
    this.slide.color = props.color;
    this.slide.fontSize = props.fontSize;
  }
  addSlideNumber(props) {
    console.log('addSlideNumber', props);
    this.slide.slideNumber = props;
  }
  addText(children, options) {
    console.log('addText', children,options);
    this.slide.addText(children, options);
  }
  addImage(props) {
    console.log('addImage', props);
    this.slide.addImage(props);
  }
  addShape(node,options) {
    if (node.hasText) {
      console.log('addShape hasText', options);
      this.addText(node.children, options);
    } else {
      const { type, ...props } = node.props;

      console.log('addShape', type, options);
      this.slide.addShape(type, options);
    }
  }
  addNotes(text) {
    console.log('addNotes', text);
    this.slide.addNotes(text);
  }
  addSection({ title }) {
    console.log('addSection', title);
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
