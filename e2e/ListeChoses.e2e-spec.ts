import {browser, element, by, protractor, ElementArrayFinder, ElementFinder} from "protractor";

describe('Premiers tests', () => {
    let inputNewTodo    : ElementFinder;
    let toggleAll       : ElementFinder;
    let itemInputsCheck : ElementArrayFinder;
    let items           : ElementArrayFinder;

    beforeEach( () => {
        browser.get('');
        inputNewTodo    = element( by.css('input.new-todo') );
        toggleAll       = element( by.css("section.main > input.toggle-all") );
        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        items           = element.all( by.css( "item-chose" ) );
    });

    it('should add 3 new item', () => {
        inputNewTodo.sendKeys( "toto" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();
        inputNewTodo.sendKeys( "titi" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();
        inputNewTodo.sendKeys( "tata" );
        browser.actions().sendKeys( protractor.Key.ENTER ).perform();

        itemInputsCheck = element.all( by.css("item-chose input.toggle") );
        items           = element.all( by.css( "item-chose" ) );

        expect(items.count()).toEqual(3);

        itemInputsCheck.each( c => {
            expect( c.isSelected() ).toBe( false );
        });


    });
    it('toggleAll click=> all items are checked', () => {
        toggleAll.click();
        itemInputsCheck.each( c => {
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

