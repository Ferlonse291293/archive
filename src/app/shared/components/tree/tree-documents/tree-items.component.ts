import {ChangeDetectionStrategy, Component, input, OnInit, output, ViewChild} from '@angular/core';
import {CdkTree, CdkTreeModule} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BaseTreeNode} from '../../../../core/data/endpoints/documents/documents-api.interface';




function flattenNodes<T extends BaseTreeNode>(nodes: T[]): T[] {
  const flattenedNodes: T[] = [];
  for (const node of nodes) {
    flattenedNodes.push(node);
    if (node.children) {
      flattenedNodes.push(...flattenNodes(node.children));
    }
  }
  return flattenedNodes;
}

@Component({
  selector: 'app-tree-items',
  standalone: true,
  imports: [CdkTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './tree-items.component.html',
  styleUrl: './tree-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeItemsComponent<T extends BaseTreeNode> implements OnInit{
  public itemsTree = input.required<T[]>()
  public clickItem = output<T>()
  public clickFolder = output<T>()



  @ViewChild(CdkTree) tree!: CdkTree<T>;
  childrenAccessor = (node: T) =>
    node.type === 'FOLDER' ? node.children : [];
  dataSource!: ArrayDataSource<T>;

  ngOnInit(): void {
   this.dataSource = new ArrayDataSource(this.itemsTree());
  }

  isItem = (_: number, node: T) =>
    node.type === 'ITEM';

  isFolder = (_: number, node: T) =>
    node.type === 'FOLDER';

  getParentNode(node: T) {
    for (const parent of flattenNodes<T>(this.itemsTree())) {
      if (parent.children?.includes(node)) {
        return parent;
      }
    }

    return null;
  }

  shouldRender(node: T): boolean {
    const parent = this.getParentNode(node);
    return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
  }

  expandAll() {
    for (const node of flattenNodes<T>(this.itemsTree())) {
      if (node.type === 'FOLDER') {
        this.tree.expand(node);
      }
    }
  }
  collapseAll() {
    for (const node of flattenNodes<T>(this.itemsTree())) {
      if (node.type === 'FOLDER') {
        this.tree.collapse(node);
      }
    }
  }


  onClickItem(event: MouseEvent, node: T){
    event.stopPropagation()
    event.preventDefault()
    this.clickItem.emit(node)
  }

  onClickFolder(event: MouseEvent, node: T) {
    event.stopPropagation()
    event.preventDefault()
    this.clickFolder.emit(node)
  }

}
