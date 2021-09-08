import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Circle, geometry, Image, Path, Surface} from "@progress/kendo-drawing";
import {ShapeOptions} from "@progress/kendo-drawing/dist/npm/drawing";

@Component({
  selector: 'app-zahnstatus',
  templateUrl: './zahnstatus.component.html',
  styleUrls: ['./zahnstatus.component.css']
})
export class ZahnstatusComponent implements OnInit {

  @ViewChild('surface')
  private surfaceElement!: ElementRef;
  private surface!: Surface;
  public tool: string = 'rot';
  radius: number = 5;
  private path!: Path;
  private mouseDown: boolean = false;

  public ngAfterViewInit(): void {
    this.drawScene(this.createSurface());
  }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  private createSurface(): Surface {
    // Obtain a reference to the native DOM element of the wrapper
    const element = this.surfaceElement.nativeElement;

    // Create a drawing surface
    this.surface = Surface.create(element);

    return this.surface;
  }

  ngOnInit(): void {
  }

  drawScene(surface: Surface) {

    var image = new Image("assets/images/ZSLeer.png", new geometry.Rect([0, 0], [791, 305]));
    surface.draw(image);


  }

  onClick(event: MouseEvent) {
    console.log("x=" + event.offsetX + " y=" + event.offsetY);
    console.log(this.path.clippedBBox());

    let clippedBox = this.path.clippedBBox();

    console.log(clippedBox);
    console.log(clippedBox.width() * clippedBox.height() + " " + this.radius);
    if (clippedBox.width() * clippedBox.height() > this.radius * this.radius * 2) {
      return;
    }
    let options: ShapeOptions;
    if (this.tool == 'rot') {
      options = {
        stroke: {
          color: `#ff0000`,
          width: 1,
        },
        fill: {
          color: `#ff0000`
        }

      };
    } else {
      options = {
        stroke: {
          color: `#008000`,
          width: 1,
        },
        fill: {
          color: `#008000`
        }
      };
    }
    var kreis = new Circle(new geometry.Circle([event.offsetX, event.offsetY], this.radius), options);
    this.surface.draw(kreis);
  }


  onMousedown($event: MouseEvent) {
    this.mouseDown = true;
    let options: ShapeOptions;
    if (this.tool == 'rot') {
      options = {
        stroke: {
          color: `#ff0000`,
          width: this.radius,
        }


      };
    } else {
      options = {
        stroke: {
          color: `#008000`,
          width: this.radius,
        }
      };
    }

    this.path = new Path(options);

    this.path.moveTo($event.offsetX, $event.offsetY);
  }

  onMouseup($event: MouseEvent) {
    this.mouseDown = false;
  }

  onMousemove($event: MouseEvent) {
    if (this.mouseDown) {
      this.path.lineTo($event.offsetX, $event.offsetY);


      this.surface.draw(this.path);
    }
  }
}
