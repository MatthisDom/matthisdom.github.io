
import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActiveSectionOnScrollDirective } from '../../directives/active-section-onscroll.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  imports: [ActiveSectionOnScrollDirective, CommonModule, FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanel implements OnInit {
  // Pagination for projets
  currentProjetPage: number = 1;
  get projetsTotalPages(): number {
    return Math.ceil(this.projetsList.length / 10) || 1;
  }
  // Pagination for equipe
  currentEquipePage: number = 1;
  get equipeTotalPages(): number {
    return Math.ceil(this.equipeList.length / 5) || 1;
  }
  // Reset page if projetsList changes (add/delete)
  // (Pagination logic is handled in template; no duplicate ngOnInit needed)
  // --- Projets modals state and objects ---
  showAddProjetModal: boolean = false;
  showEditProjetModal: boolean = false;
  showDeleteProjetModal: boolean = false;
  addProjetItem: any = { titre: '', tag: '', contenu: '', image: '', logo: '' };
  editProjetItem: any = { id: null, titre: '', tag: '', contenu: '', image: '', logo: '' };
  deleteProjetItem: any = { id: null, titre: '', tag: '', contenu: '', image: '', logo: '' };

  // --- Projets CRUD modals logic ---
  openAddProjetModal() {
    this.addProjetItem = { titre: '', tag: '', contenu: '', image: '', logo: '' };
    this.showAddProjetModal = true;
  }

  closeAddProjetModal() {
    this.showAddProjetModal = false;
    this.addProjetItem = { titre: '', tag: '', contenu: '', image: '', logo: '' };
  }

  saveAddProjet() {
    const newId = this.projetsList.length > 0 ? Math.max(...this.projetsList.map(p => p.id)) + 1 : 1;
    this.projetsList.push({ id: newId, ...this.addProjetItem });
    this.closeAddProjetModal();
  }

  openEditProjetModal(item: any) {
    this.editProjetItem = { ...item };
    this.showEditProjetModal = true;
  }

  closeEditProjetModal() {
    this.showEditProjetModal = false;
    this.editProjetItem = { id: null, titre: '', tag: '', contenu: '', image: '', logo: '' };
  }

  saveEditProjet() {
    const idx = this.projetsList.findIndex(p => p.id === this.editProjetItem.id);
    if (idx !== -1) { 
      this.projetsList[idx] = { ...this.editProjetItem };
    }
    this.closeEditProjetModal();
  }

  openDeleteProjetModal(item: any) {
    this.deleteProjetItem = { ...item };
    this.showDeleteProjetModal = true;
  }

  closeDeleteProjetModal() {
    this.showDeleteProjetModal = false;
    this.deleteProjetItem = { id: null, titre: '', tag: '', contenu: '', image: '', logo: '' };
  }

  confirmDeleteProjet() {
    this.projetsList = this.projetsList.filter(p => p.id !== this.deleteProjetItem.id);
    this.closeDeleteProjetModal();
  }

  // Gestion du fichier image/logo pour l'ajout projet
  onAddProjetFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.addProjetItem.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onAddProjetLogoFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.addProjetItem.logo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // Gestion du fichier image/logo pour l'édition projet
  onEditProjetFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editProjetItem.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onEditProjetLogoFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editProjetItem.logo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onAddEquipeFileChange(event: any) 
  {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.addEquipeItem.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Gestion du fichier image pour l'édition
  onEditEquipeFileChange(event: any) 
  {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editEquipeItem.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  constructor(private meta: Meta) 
  {

  }
  activeSection: string = '';
  devisList = [
    { id: 1, label: 'Devis site vitrine' },
    { id: 2, label: 'Devis application mobile' },
    { id: 3, label: 'Devis refonte UX' }
  ];

  // --- Devis Type modals state and objects ---
  showAddDevisTypeModal: boolean = false;
  addDevisTypeItem: any = { label: '' };

  // --- Devis Type CRUD modals logic ---
  openAddDevisTypeModal() {
    this.addDevisTypeItem = { label: '' };
    this.showAddDevisTypeModal = true;
  }

  closeAddDevisTypeModal() {
    this.showAddDevisTypeModal = false;
    this.addDevisTypeItem = { label: '' };
  }

  saveAddDevisType() {
    const newId = this.devisList.length > 0 ? Math.max(...this.devisList.map(d => d.id)) + 1 : 1;
    this.devisList.push({ id: newId, label: this.addDevisTypeItem.label });
    this.closeAddDevisTypeModal();
  }
  mentionsLegales = 
  [
    {reference: 'president',contenu: "nom_president" },
    {reference: 'responsable',contenu: "nom_responsable" }
  ]

  projetsList = 
  [
    {id: 1, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 2, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 3, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 4, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 5, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 6, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 7, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 8, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 9, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 10, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 11, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 12, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 13, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 14, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 15, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 16, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 17, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""},
    {id: 18, titre: "Titre1", tag: "tag",contenu: "", image: "", logo: ""}
  ]

  equipeList =
  [
    {id:1, nom:"doe", prenom: "john",role: "president" ,image:""}
  ]

  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  editItem: any = {};
  deleteItem: any = {};

  // Equipe modals state and objects
  showAddEquipeModal: boolean = false;
  showEditEquipeModal: boolean = false;
  showDeleteEquipeModal: boolean = false;
  addEquipeItem: any = { nom: '', prenom: '', role: '', image: '' };
  editEquipeItem: any = { id: null, nom: '', prenom: '', role: '', image: '' };
  deleteEquipeItem: any = { id: null, nom: '', prenom: '', role: '', image: '' };
  // --- Equipe CRUD modals logic ---
  openAddEquipeModal() {
    this.addEquipeItem = { nom: '', prenom: '', role: '', image: '' };
    this.showAddEquipeModal = true;
  }

  closeAddEquipeModal() {
    this.showAddEquipeModal = false;
    this.addEquipeItem = { nom: '', prenom: '', role: '', image: '' };
  }

  saveAddEquipe() {
    const newId = this.equipeList.length > 0 ? Math.max(...this.equipeList.map(e => e.id)) + 1 : 1;
    this.equipeList.push({ id: newId, ...this.addEquipeItem });
    this.closeAddEquipeModal();
  }

  openEditEquipeModal(item: any) {
    this.editEquipeItem = { ...item };
    this.showEditEquipeModal = true;
  }

  closeEditEquipeModal() {
    this.showEditEquipeModal = false;
    this.editEquipeItem = { id: null, nom: '', prenom: '', role: '', image: '' };
  }

  saveEditEquipe() {
    const idx = this.equipeList.findIndex(e => e.id === this.editEquipeItem.id);
    if (idx !== -1) {
      this.equipeList[idx] = { ...this.editEquipeItem };
    }
    this.closeEditEquipeModal();
  }

  openDeleteEquipeModal(item: any) {
    this.deleteEquipeItem = { ...item };
    this.showDeleteEquipeModal = true;
  }

  closeDeleteEquipeModal() {
    this.showDeleteEquipeModal = false;
    this.deleteEquipeItem = { id: null, nom: '', prenom: '', role: '', image: '' };
  }

  confirmDeleteEquipe() {
    this.equipeList = this.equipeList.filter(e => e.id !== this.deleteEquipeItem.id);
    this.closeDeleteEquipeModal();
  }

  openEditModal(item: any) 
  {
    this.editItem = { ...item };
    this.showEditModal = true;
  }

  closeEditModal() 
  {
    this.showEditModal = false;
    this.editItem = {};
  }

  saveEdit() 
  {
    const index = this.devisList.findIndex((d) => d.id === this.editItem.id);
    if (index !== -1) 
    {
      this.devisList[index] = { ...this.editItem };
    }
    this.closeEditModal();
  }

  openDeleteModal(item: any) 
  {
    this.deleteItem = { ...item };
    this.showDeleteModal = true;
  }

  closeDeleteModal() 
  {
    this.showDeleteModal = false;
    this.deleteItem = {};
  }

  confirmDelete() 
  {
    this.devisList = this.devisList.filter((d) => d.id !== this.deleteItem.id);
    this.closeDeleteModal();
  }
  private sectionIds = ['accueil','devis', 'equipe', 'projets', 'mentions-legales'];
  private scrollHandler = this.onScroll.bind(this);
  @Input() user: string = 'admin';
  ngOnInit(): void 
  {
    this.meta.addTags([
      { name: 'robots', content: 'noindex' },
    ]);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      this.onScroll(); // Initial check
    }
  }
  ngOnDestroy(): void 
  {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private onScroll(): void 
  {
    if (typeof window === 'undefined') return;
    let currentSection = '';
    const scrollPosition = window.scrollY + 120; // 120px offset for navbar
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = id;
        }
      }
    }
    this.activeSection = currentSection;
  }
  scrollTo(id: string) 
  {
    const el = document.getElementById(id);
    if (el) 
    {
      el.scrollIntoView({ behavior: 'smooth' });
    }
      this.activeSection = id;
  }
}
