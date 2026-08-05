import {ChangeDetectionStrategy, Component, DoCheck, input, OnInit, ViewChild} from '@angular/core';
import {CdkTree, CdkTreeModule} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {IDocumentTree} from '../../../../core/data/endpoints/documents/documents-api.interface';



function flattenNodes(nodes: IDocumentTree[]): IDocumentTree[] {
  const flattenedNodes: IDocumentTree[] = [];
  for (const node of nodes) {
    flattenedNodes.push(node);
    if (node.children) {
      flattenedNodes.push(...flattenNodes(node.children));
    }
  }
  return flattenedNodes;
}

@Component({
  selector: 'app-tree-documents',
  standalone: true,
  imports: [CdkTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './tree-documents.component.html',
  styleUrl: './tree-documents.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeDocumentsComponent implements OnInit{
  public documentsTree = input.required<IDocumentTree[]>()
  @ViewChild(CdkTree) tree!: CdkTree<IDocumentTree>;
  childrenAccessor = (node: IDocumentTree) =>
    node.type === 'FOLDER' ? node.children : [];
  dataSource!: ArrayDataSource<IDocumentTree>;

  ngOnInit(): void {
   this.dataSource = new ArrayDataSource(this.documentsTree());
  }

  isDocument = (_: number, node: IDocumentTree) =>
    node.type === 'DOCUMENT';

  isFolder = (_: number, node: IDocumentTree) =>
    node.type === 'FOLDER';

  getParentNode(node: IDocumentTree) {
    for (const parent of flattenNodes(this.documentsTree())) {
      if (parent.children?.includes(node)) {
        return parent;
      }
    }

    return null;
  }

  shouldRender(node: IDocumentTree): boolean {
    const parent = this.getParentNode(node);
    return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
  }

  expandAll() {
    for (const node of flattenNodes(this.documentsTree())) {
      if (node.type === 'FOLDER') {
        this.tree.expand(node);
      }
    }
  }
  collapseAll() {
    for (const node of flattenNodes(this.documentsTree())) {
      if (node.type === 'FOLDER') {
        this.tree.collapse(node);
      }
    }
  }



}

// const EXAMPLE_DATA: IDocumentTree[] = [
//   {
//     name: 'Fruit',
//     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];

