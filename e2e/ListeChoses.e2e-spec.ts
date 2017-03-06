import {browser, element, by, protractor, ElementArrayFinder, ElementFinder} from "protractor";

describe('Premiers tests', () => {
    let inputNewTodo    : ElementFinder;
    let toggleAll       : ElementFinder;
    let itemInputsCheck : ElementArrayFinder;
    let items           : ElementArrayFinder;
    let SF_inputNew     = element( by.css("#sansFramework > section > form > input") );
    let SF_items        : ElementArrayFinder;
    let SF_InputChecks  : ElementArrayFinder;
    let computeElements = () => {
        browser.get('');
        inputNewTodo    = element( by.css('input.new-todo') );
        toggleAll       = element( by.css("section.main > input.toggle-all") );
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        items           = element.all( by.css( "item-chose" ) );
        SF_items        = element.all( by.css( "#sansFramework > section > ul .chose" ) );
        SF_InputChecks  = element.all( by.css( "#sansFramework > section > ul .chose > input[type=checkbox]" ) );
    };

    beforeEach( computeElements );

    it('should add 3 new item', () => {
        inputNewTodo.sendKeys( "toto" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();
        inputNewTodo.sendKeys( "titi" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();

        SF_inputNew.sendKeys( "tata" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();

        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        items           = element.all( by.css( "item-chose" ) );

        expect(items.count()).toEqual(3);
        itemInputsCheck.each( c => {
            expect( c.isSelected() ).toBe( false );
        });

        // MVP version
        computeElements();
        expect(SF_items.count()).toEqual(3);
        SF_InputChecks.each( c => {
            expect( c.isSelected() ).toBe( false );
        });
    });
    it('toggleAll click=> all items are checked', () => {
        toggleAll.click();
        itemInputsCheck.each( c => {
            expect( c.isSelected() ).toBe( true );
        });
        SF_InputChecks.each( c => {
            expect( c.isSelected() ).toBe( true );
        });
    });
    it('item 0 click => toggleAll becomes unchecked', () => {
        itemInputsCheck.first().click();
        expect( toggleAll.isSelected() ).toBe(false);
    });
    it('toggleAll click=> all items are checked', () => {
        toggleAll.click();
        itemInputsCheck.each( c => {
            expect( c.isSelected() ).toBe( true );
        });
        SF_InputChecks.each( c => {
            expect( c.isSelected() ).toBe( true );
        });
    });
    it('The li root of checked items have the class "completed"', () => {
        let lis = element.all( by.css("ul.todo-list > li.completed") );
        expect( lis.count() ).toEqual(3);
    });
    it('item 0 click => toggleAll becomes unchecked', () => {
        itemInputsCheck.first().click();
        expect( toggleAll.isSelected() ).toBe(false);
    });
    it('item 0 click => toggleAll becomes checked', () => {
        itemInputsCheck.first().click();
        expect( toggleAll.isSelected() ).toBe(true);
    });
});

describe("Edition d'items", () => {
    let labelFirstItem: ElementFinder;
    let inputNewTodo    : ElementFinder;
    let items           : ElementArrayFinder;

    beforeEach( () => {
        browser.get('');
        labelFirstItem  = element( by.css(`item-chose .view label`) );
        inputNewTodo    = element( by.css('input.new-todo') );
        items           = element.all( by.css( "item-chose" ) );
    });

    it('click on label should make input appears and text should be kept.', () => {
        let txtLabel = labelFirstItem.getText();
        browser.actions().doubleClick( labelFirstItem ).perform();

        let input = element( by.css(`item-chose form input`) );
        expect( input.getAttribute("value") ).toEqual( txtLabel );

        input.sendKeys( " Bob" );
        let strInput = input.getAttribute( "value" );

        browser.actions().sendKeys( protractor.Key.ENTER ).perform();

        labelFirstItem  = element( by.css(`item-chose .view label`) );
        expect( labelFirstItem.getText() ).toEqual( strInput );
    });
});

// Filters
describe("Filters are OK", () => {
    let labelFirstItem: ElementFinder;
    let inputNewTodo    : ElementFinder;
    let items           : ElementArrayFinder;
    let itemInputsCheck : ElementArrayFinder;

    beforeEach( () => {
        browser.get('');
        labelFirstItem  = element( by.css(`item-chose .view label`) );
        inputNewTodo    = element( by.css('input.new-todo') );
        items           = element.all( by.css( "item-chose" ) );
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
    });

    it("check first element as done, so 1/3 are done", () => {
        itemInputsCheck.first().click();
        let nbDone = itemInputsCheck.reduce( (acc,input) => acc + input.isSelected()?1:0, 0 );
        expect(nbDone).toBe(1);
        expect(itemInputsCheck.count()).toBe(3);
    });

    it("Filter all is selected", () => {
        let filterAll = element( by.css("ul.filters a.filterAll") );
        expect(filterAll.getAttribute("class").then( (strClass: string) => {
            expect( strClass.split(" ").indexOf("selected") >= 0 ).toBe(true);
        }));
    });

    it("Filter actives => 1 visible", () => {
        let filterActives = element( by.css("ul.filters a.filterActives") );
        filterActives.click();
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        expect(itemInputsCheck.count()).toBe(1);
    });

    it("Filter completed => 2 visibles", () => {
        let filterCompleted = element( by.css("ul.filters a.filterCompleted") );
        filterCompleted.click();
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        expect(itemInputsCheck.count()).toBe(2);
    });

    it("Select filter All and delete completed item => 1 remains", () => {
        let filterAll = element( by.css("ul.filters a.filterAll") );
        filterAll.click();
        let clearCompleted = element( by.css("button.clear-completed") );
        clearCompleted.click();
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        expect(itemInputsCheck.count()).toBe(1);
    });
});

// Suppress checked items...
